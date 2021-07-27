import React from 'react'
import { createClient } from "contentful";
import Image from 'next/image';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { motion } from "framer-motion";

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async() => {
    const res = await client.getEntries({
        content_type: 'produk'
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
        content_type: 'produk',
        'fields.slug': params.slug
    })

    return {
        props: { produk: items[0]}
    }
}

export default function ProdukDetails( { produk }) {
    const { featured, judul, deskripsi } = produk.fields
    return (
        <div>
            <div className='fullscreen'>
                <div className='product'>
                    <section className='product-image'>
                        <Image src={'https:' + featured.fields.file.url}
                        width={featured.fields.file.details.image.width}
                        height={featured.fields.file.details.image.height}
                        alt='Foto Produk'
                        layout='intrinsic'
                        className='img'
                        />
                    </section>
                    <section className='product-details'>
                        <div className='inner'>
                            <Link href='/produk' passHref>
                                <div>
                                    <a className='go-back'>Kembali ke produk</a>
                                </div>
                            </Link>
                            <h2>{ judul }</h2>
                            <div className='contact-info'>
                                <span>Penjual:</span>
                                <br/>
                                <span>Harga: Rp </span>
                            </div>
                            <div className='desc'>{documentToReactComponents(deskripsi)}</div>
                            <div className='btn-row'>
                                <Link href='https://shopee.co.id' passHref>
                                    <Image src='/shopee.svg' width={45} height={45} alt='icon Shopee' className='btn'/>
                                </Link>
                                <Link href='https://google.com' passHref>
                                    <Image src='/whatsapp.svg' width={45} height={45} alt='icon Whatsapp' className='btn'/>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
