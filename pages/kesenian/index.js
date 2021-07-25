import React from 'react';
import { createClient } from "contentful";
import KesenianCard from "../../components/KesenianCard"
import { Container, Row } from 'react-bootstrap';

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'kesenian'})

  return {
      props: {
          kesenian: res.items
      }
  }
}

export default function Kesenian({ kesenian }) {
    console.log(kesenian)
    
    return (
        <Container>
            <h2>Kesenian Solodiran</h2>
            <Row md={2} lg={2} className='list-kesenian'>
                {kesenian.map(kesenian => (
                    <KesenianCard key={kesenian.sys.id} kesenian={ kesenian }/>
                ))}
            </Row>
        </Container>
    )
}
