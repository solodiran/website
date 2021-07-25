import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Col, Card, Button } from 'react-bootstrap'

export default function produkCard({produk}) {
    const { thumbnail, judul, slug} = produk.fields
    return (
        <Col xs={6} md={4} id ="card">
            <Card className="text-center">
                <Card.Img src={'https:' + thumbnail.fields.file.url}/>
                <Card.Body>
                    <Card.Title>{judul}</Card.Title>
                    <Button href={'/produk/' + slug }>Temukan lebih lanjut</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
