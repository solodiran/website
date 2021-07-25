import React from 'react'
import { createClient } from "contentful";
import WisataCard from "../../components/WisataCard"
import { Container, Row } from 'react-bootstrap';

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'wisata'})

  return {
      props: {
          wisata: res.items
      }
  }
}
export default function Wisata({ wisata }) {
    return (
        <Container>
            <h2>Wisata Solodiran</h2>
            <Row md={2} lg={4} className='list-wisata'>
                {wisata.map(wisata => (
                    <WisataCard key={wisata.sys.id} wisata={wisata}/>
                ))}
            </Row>
        </Container>
    )
}
