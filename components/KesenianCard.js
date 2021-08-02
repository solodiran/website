import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './KesenianCard.module.scss'

export default function KesenianCard({kesenian}) {
    const { thumbnail, judul, slug} = kesenian.fields
    console.log(kesenian)
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
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className={styles.btn}>
                    <Link href={'/kesenian/' + slug } passHref>
                        <button> Lihat lebih detail</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
