import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image"
import { createClient } from "contentful";

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'galeri'})

  return {
      props: {
          galeri: res.items
      }
  }
}


const Galeri = () => {
    return (
        <Container>
            <h1>Galeri Solodiran</h1>
            <Row>
                <Col>
                <Image src="https://picsum.photos/200" alt="foto Solodiran" width={200} height={200} />
                </Col>
                <Col>
                <Image src="https://picsum.photos/200" alt="foto Solodiran" width={200} height={200} />
                </Col>
                <Col>
                <Image src="https://picsum.photos/200" alt="foto Solodiran" width={200} height={200} />
                </Col>
            </Row>
            <Row>
                <Col>
                <Image src="https://picsum.photos/200" alt="foto Solodiran" width={200} height={200} />
                </Col>
                <Col>
                <Image src="https://picsum.photos/200" alt="foto Solodiran" width={200} height={200} />
                </Col>
                <Col>
                <Image src="https://picsum.photos/200" alt="foto Solodiran" width={200} height={200} />
                </Col>
            </Row>
            <Row>
                <Col>
                <Image src="https://picsum.photos/200" alt="foto Solodiran" width={200} height={200} />
                </Col>
                <Col>
                <Image src="https://picsum.photos/200" alt="foto Solodiran" width={200} height={200} />
                </Col>
                <Col>
                <Image src="https://picsum.photos/200" alt="foto Solodiran" width={200} height={200} />
                </Col>
            </Row>
        </Container>
      );
}
 
export default Galeri;