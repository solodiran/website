import React from 'react'
import Link from 'next/link'

export default function produkCard({wisata}) {
    const { thumbnail, judul, slug, deskripsi} = wisata.fields
    return (
        <div className="card">
            <div className="thumbnail">

            </div>
            <div className="content">
                <h4>{judul}</h4>
                <div className="action">
                    <Link href={'/wisata/' + slug } ><a>Lihat</a></Link>
                </div>
            </div>
        </div>
    )
}
