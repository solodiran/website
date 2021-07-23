import React from 'react'
import { createClient } from "contentful";

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async() => {
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

export async function getStaticProps({ params }){
    const res = await client.getEntries({
        content_type: 'kesenian',
        'fields.slug': params.slug
    })

    return {
        props: { kesenian: items[0]}
    }
}

export default function KesenianDetails( { kesenian }) {
    return (
        <div>
            
        </div>
    )
}
