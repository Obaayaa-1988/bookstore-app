import React from 'react'
import { Container, Row, Col, Card, Form, FormControl, Button } from 'react-bootstrap';
import Image from '../images/image1.jpg';
import Categories from './categories';


export default function Home() {
    return (
        <div>
            <div className='light-background'>
                <Container>
                    <Row>
                        <Col>
                            <Card className=" text-dark home-card">
                                <Card.Img src={Image} alt="Card image" />

                                <Card.ImgOverlay>
                                    <Card.Text >
                                        <h1 className='text'>REJUVINATE YOUR BRAIN</h1>
                                        
                                    </Card.Text>

                                    <Form className="d-flex">
                                            <FormControl type="search"placeholder="Search....." className="me-2"aria-label="Search"/>
                                            <Button variant="danger">Search</Button>
                                        </Form>
                                </Card.ImgOverlay>
                            </Card>


                        </Col>
                    </Row>
                </Container>



            </div>

            <Categories />






        </div>
    )
}
