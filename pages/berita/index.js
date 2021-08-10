import React from 'react';
import { createClient } from "contentful";
import BeritaCard from "../../components/BeritaCard"

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'berita'})

  return {
      props: {
          berita: res.items
      }
  }
}

export default function Berita({ berita }) {
    
    return (
        <div>
            <h2 className='header'>Berita Solodiran</h2>
            <div className='list-berita'>
                {berita.map(berita => (
                    <BeritaCard key={berita.sys.id} berita={berita}/>
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
