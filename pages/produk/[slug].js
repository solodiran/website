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
    const { featured, judul, deskripsi, penjual, harga, shopee, whatsapp } = produk.fields
    return (
        <div className='container'>
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
                                <span>Penjual: {penjual}</span>
                                <br/>
                                <span>Harga: Rp{harga} </span>
                            </div>
                            <div className='desc'>{documentToReactComponents(deskripsi)}</div>
                            <div className='btn-row'>
                                <Link href={'https://bit.ly/' + shopee}  passHref>
                                    <Image src='/shopee.svg' width={45} height={45} alt='icon Shopee' className='btn'/>
                                </Link>
                                <Link href={'https://bit.ly/' + whatsapp} passHref>
                                    <Image src='/whatsapp.svg' width={45} height={45} alt='icon Whatsapp' className='btn'/>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <style jsx>{`
            html {
            min-height: 100vh;
            position: relative;
            }

            .fullscreen {
                height: 100vh;
                margin: 2rem 0;
           }
            .fullscreen .product {
                height: 100vh;
                display: flex;
                align-items: center;
                justify-content: space-between;
           }
            @media only screen and (max-width: 1000px) {
                .fullscreen .product {
                    height: 50%;
                    flex-direction: column;
               }
           }
            .fullscreen .product .product-image {
                width: 50%;
                height: 100%;
                background: #dfdfdf;
                display: flex;
                align-items: center;
                justify-content: center;
           }
            .fullscreen .product .product-image .img {
                cursor: move;
                width: 50%;
           }
            .fullscreen .product .product-details {
                width: 50%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
           }
            @media only screen and (max-width: 1000px) {
                .fullscreen .product .product-details {
                    margin-top: 10rem;
               }
           }
            .fullscreen .product .product-details .inner {
                width: 30em;
                position: relative;
           }
            .fullscreen .product .product-details .inner .go-back {
                cursor: pointer;
                color: #282828;
                text-decoration: none;
                text-align: left;
                position: absolute;
                top: -7.75em;
                left: 0;
           }
            @media only screen and (max-width: 1000px) {
                .fullscreen .product .product-details .inner .go-back {
                    top: -1.5em;
               }
           }
            .fullscreen .product .product-details .inner .desc {
                color: #424550;
                font-weight: 300;
                text-align: justify;
           }
            .fullscreen .product .product-details .inner .btn-row {
                margin-top: 2rem;
                display: flex;
                align-items: center;
           }
            .fullscreen .product .product-details .inner .btn-row .btn {
                cursor: pointer;
                margin-left: 3rem;
                border: none;
                border-radius: 8px;
                height: 3em;
                font-size: 0.875rem;
                text-transform: uppercase;
                font-weight: 500;
                letter-spacing: 0.06rem;
           }
           @media only screen and (max-width: 1000px) {
            .container {
                margin-bottom: 12em;
              }
       }
        
            
            `}</style>
        </div>
    )
}
