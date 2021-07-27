import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './WisataCard.module.scss'

export default function WisataCard({ wisata }) {
    const { thumbnail, judul, slug} = wisata.fields
    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <Image 
                src={'https:' + thumbnail.fields.file.url} 
                height={thumbnail.fields.file.details.image.height} 
                width={thumbnail.fields.file.details.image.height} 
                alt='Foto Wisata' layout='intrinsic' />
            </div>
            <div className={styles.details}>
                <h3>{ judul }</h3>
                <div className={styles.btn}>
                    <Link href={'/wisata/' + slug } passHref>
                        <button> Lihat lebih detail</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
