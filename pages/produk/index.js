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
export default function Produk({ produk }) {
    
    return (
        <div>
            <h2 className='header'>Produk Solodiran</h2>
            <div className='list-produk'>
                {produk.map(produk => (
                    <ProdukCard key={produk.sys.id} produk={produk}/>
                ))}
            </div>
            <style jsx>{`
            html {
                display: grid;
                min-height: 100%;
              }
              
              body {
                display: grid;
              }
            `}
            </style>
        </div>
    )
}
