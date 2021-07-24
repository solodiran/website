import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function WisataCard({ wisata }) {
    const { thumbnail, judul, slug} = wisata.fields
    return (
        <div className="card">
            <div className="thumbnail">
            <Image
                src={'https:' + thumbnail.fields.file.url}
                width={thumbnail.fields.file.details.image.width}
                height={thumbnail.fields.file.details.image.height}
                alt='Foto objek'
                />
            </div>
            <div className="content">
                <h4>{ judul }</h4>
                <div className="action">
                    <Link href={'/wisata/' + slug } ><a>Lihat</a></Link>
                </div>
            </div>
        </div>
    )
}
