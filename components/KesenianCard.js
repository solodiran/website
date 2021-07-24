import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function KesenianCard({kesenian}) {
    const { thumbnail, judul, slug} = kesenian.fields
    console.log(kesenian)
    return (
        <div className="card">
            <div className="thumbnail">
            <Image
                src={'https:' + thumbnail.fields.file.url}
                width={thumbnail.fields.file.details.image.width}
                height={thumbnail.fields.file.details.image.height}
                alt='Foto Kesenian'
                />
            </div>
            <div className="content">
                <h4>{judul}</h4>
                <div className="action">
                    <Link href={'/kesenian/' + slug } ><a>Lihat</a></Link>
                </div>
            </div>
        </div>
    )
}
