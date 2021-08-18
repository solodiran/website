import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './KesenianCard.module.scss'

export default function KesenianCard({kesenian}) {
    const { thumbnail, judul, slug, ringkasan} = kesenian.fields
    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <Image 
                src={'https:' + thumbnail.fields.file.url} 
                height={thumbnail.fields.file.details.image.height} 
                width={thumbnail.fields.file.details.image.height} 
                alt='Foto Kesenian' layout='intrinsic' />
            </div>
            <div className={styles.details}>
                <h3>{ judul }</h3>
                <p>{ ringkasan }</p>
                <div className={styles.btn}>
                    <Link href={'/kesenian/' + slug } passHref>
                        <button> Lihat lebih detail</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
