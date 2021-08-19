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
        <div className='prod'>
            <h2 className='header'>Produk Solodiran</h2>
            <div className='list-produk'>
                {produk.map(produk => (
                    <ProdukCard key={produk.sys.id} produk={produk}/>
                ))}
            </div>
            <style jsx>{`
            html {
              min-height: 100vh;
              position: relative;
              }
              
              body {
                display: grid;
                margin-bottom: 4em;
              }
              @media only screen and (max-width: 1000px) {
                footer {
                  display: none;
               }
             }
              
            `}
            </style>
        </div>
    )
}
