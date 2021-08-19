import React from 'react';
import { createClient } from "contentful";
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'berita'
    })

    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug}
        }
    })
    return {
        paths,
        fallback: false,

    }
}

export const getStaticProps = async ({ params }) => {
    const { items } = await client.getEntries({
        content_type: 'berita',
        'fields.slug': params.slug
    })

    return {
        props: { berita: items[0]}
    }
}

export default function KesenianDetails( { berita }) {
    const { judul, tanggal, featured, konten } = berita.fields 
    return (
        <div className='container'>
            <section className='body'>
                <div className='image'>
                    <Image
                    src={'https:' + featured.fields.file.url}
                    width={featured.fields.file.details.image.width}
                    height={featured.fields.file.details.image.height}
                    layout='intrinsic'
                    alt='Foto Berita'
                    />
                </div>
                <h2>{ judul }</h2>
                <span>{ tanggal }</span>  
                <div className='text'>{documentToReactComponents( konten )}</div>
            </section>

            <style jsx>{`
                .container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center; 
                }
                
                .image {
                    max-height: 50%;
                }
                
                .text {
                    text-align: justify;
                }
            `}
            </style>
        </div>
    )
}
