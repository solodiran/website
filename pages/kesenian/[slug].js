import React from 'react';
import { createClient } from "contentful";
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'kesenian'
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
        content_type: 'kesenian',
        'fields.slug': params.slug
    })

    return {
        props: { kesenian: items[0]}
    }
}

export default function KesenianDetails( { kesenian }) {
    const { featured, judul, deskripsi } = kesenian.fields 
    return (
        <Container>
            <section>
                <Image
                src={'https:' + featured.fields.file.url}
                width={featured.fields.file.details.image.width}
                height={featured.fields.file.details.image.height}
                alt='Foto Produk'
                />
                <h2>{ judul }</h2>
            </section>
                <div>{documentToReactComponents(deskripsi)}</div>
                
            <style jsx>{`
                div {
                    text-align: justify;
                }
            `}
            </style>
        </Container>
    )
}
