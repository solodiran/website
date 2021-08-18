import Head from "next/head";
import Image from 'next/image';
import Link from "next/link";
import { Container, Carousel} from "react-bootstrap";


export default function Home() {
  return (
  <div className='container'>
    <Head>
      <title>Desa Solodiran</title>
    </Head> 
      <Carousel fade nextLabel='' prevLabel='' >
        <Carousel.Item>
        <Image src="https://picsum.photos/2000/797" alt="Illust" width={2000} height={797} /> 
          <Carousel.Caption>
            <h3>Selamat Datang di Solodiran</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <Image src="https://picsum.photos/2000/797" alt="Illust" width={2000} height={797} /> 
          <Carousel.Caption>
            <h3>Selamat Datang di Solodiran</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <Image src="https://picsum.photos/2000/797" alt="Illust" width={2000} height={797} /> 
          <Carousel.Caption>
            <h3>Selamat Datang di Solodiran</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className='row'>
        <div className='cards'>
          <div className='image'>
            <Image src='https://picsum.photos/500'  alt='foto produk' width={500} height={500} layout='intrinsic'/>
          </div>
          <div className='btn'>
            <h3>Produk</h3>
            <Link href={'/produk'} passHref>
              <button> Lihat lebih detail</button>
            </Link>
          </div>
        </div>

        <div className='cards'>
          <div className='image'>
            <Image src='https://picsum.photos/500'  alt='foto berita' width={500} height={500} layout='intrinsic'/>
          </div>
          <div className='btn'>
            <h3>Berita</h3>
            <Link href={'/berita'} passHref>
              <button> Lihat lebih detail</button>
            </Link>
          </div>
        </div>

        <div className='cards'>
          <div className='image'>
            <Image src='https://picsum.photos/500'  alt='foto kesenian' width={500} height={500} layout='intrinsic'/>
          </div>
          <div className='btn'>
            <h3>Kesenian</h3>
            <Link href={'/kesenian'} passHref>
              <button> Lihat lebih detail</button>
            </Link>
          </div>
        </div>

        <div className='cards'>
          <div className='image'>
            <Image src='https://picsum.photos/500'  alt='foto wisata' width={500} height={500} layout='intrinsic'/>
          </div>
          <div className='btn'>
            <h3>Wisata</h3>
            <Link href={'/wisata'} passHref>
              <button> Lihat lebih detail</button>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
      .container {
        margin-bottom: 6em;
      }
      `}
      </style>
    </div> 
  )
}
