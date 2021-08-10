import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './BeritaCard.module.scss'

export default function BeritaCard({ berita }) {
    const { thumbnail, judul, slug, ringkasan } = berita.fields
    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <Image 
                src={'https:' + thumbnail.fields.file.url} 
                height={thumbnail.fields.file.details.image.height} 
                width={thumbnail.fields.file.details.image.height} 
                alt='Foto berita' layout='intrinsic' />
            </div>
            <div className={styles.details}>
                <h3>{ judul }</h3>
                <p>{ ringkasan }</p>
                <div className={styles.btn}>
                    <Link href={'/berita/' + slug } passHref>
                        <button> Lihat lebih detail</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
