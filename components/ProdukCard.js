import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './ProdukCard.module.scss'

export default function produkCard({produk}) {
    const { thumbnail, judul, slug} = produk.fields
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image src={'https:' + thumbnail.fields.file.url} height={260} width={300} alt='Foto Produk' layout='intrinsic' />
            </div>
            <div className={styles.details}>
                <h3>{ judul }</h3>
                <div className={styles.btn}>
                    <Link href={'/produk/' + slug } passHref>
                        <button> Detail</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
