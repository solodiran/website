import React from 'react'
import Image from 'next/image'
import { Col, Card, Button } from 'react-bootstrap'

export default function KesenianCard({kesenian}) {
    const { thumbnail, judul, slug} = kesenian.fields
    console.log(kesenian)
    return (
        <Col xs={6} md={4} id ="card">
            <Card className="text-center">
                <Card.Img src={'https:' + thumbnail.fields.file.url}/>
                <Card.Body>
                    <Card.Title>{judul}</Card.Title>
                    <Button href={'/kesenian/' + slug }>Temukan lebih lanjut</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
