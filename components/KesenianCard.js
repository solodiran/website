import React from 'react'
import Link from 'next/link'

export default function produkCard({produk}) {
    const { deskripsiProduk, fotoProduk, namaProduk, slug} = produk.fields
    return (
        <div className="card">
            <div className="thumbnail">

            </div>
            <div className="content">
                <h4>{namaProduk}</h4>
                <div className="action">
                    <Link href={'/produk/' + slug } ><a>Lihat Produk</a></Link>
                </div>
            </div>
        </div>
    )
}
