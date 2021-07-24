import Head from "next/head"
import Link from "next/link"
import Image from 'next/image'
import { Container, Carousel, Row, Col, Card, Button } from "react-bootstrap";


export default function Home() {
  return (
  <Container fluid>
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

      <Row> {/* Col cards */}
        <Col sm>
          <Card className="text-center">
            <Card.Img src='https://picsum.photos/500'></Card.Img>
            <Card.Body>
              <Card.Title>Wisata</Card.Title>
              <Button>Temukan lebih lanjut</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm>
          <Card className="text-center">
            <Card.Img src='https://picsum.photos/500'/>
            <Card.Body>
              <Card.Title>Galeri</Card.Title>
              <Button>Temukan lebih lanjut</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm>
          <Card className="text-center">
            <Card.Img src='https://picsum.photos/500'/>
            <Card.Body>
              <Card.Title>Produk</Card.Title>
              <Button>Temukan lebih lanjut</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm>
          <Card className="text-center">
            <Card.Img src='https://picsum.photos/500'/>
            <Card.Body>
              <Card.Title>Kesenian</Card.Title>
              <Button>Temukan lebih lanjut</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container> 
  )
}
