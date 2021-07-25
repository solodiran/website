import React from 'react'
import { createClient } from "contentful";
import ProdukCard from '../../components/ProdukCard';
import { Container, Row } from 'react-bootstrap';

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'produk'})

  return {
      props: {
          produk: res.items
      }
  }
}
export default function Produk({produk}) {
    console.log(produk)
    
    return (
        <Container>
            <h2>Produk Solodiran</h2>
            <Row md={2} lg={4} className='list-produk'>
                {produk.map(produk => (
                    <ProdukCard key={produk.sys.id} produk={produk}/>
                ))}
            </Row>
        </Container>
    )
}
