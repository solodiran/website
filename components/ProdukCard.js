import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function produkCard({produk}) {
    const { thumbnail, judul, slug} = produk.fields
    console.log(produk)
    return (
        <div className="card">
            <div className="thumbnail">
            <Image
                src={'https:' + thumbnail.fields.file.url}
                width={thumbnail.fields.file.details.image.width}
                height={thumbnail.fields.file.details.image.height}
                alt='Foto Produk'
                />
            </div>
            <div className="content">
                <h4>{judul}</h4>
                <div className="action">
                    <Link href={'/produk/' + slug } ><a>Lihat Produk</a></Link>
                </div>
            </div>
        </div>
    )
}
