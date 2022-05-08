import React from 'react'
import { Container, Row, Col, Card, } from 'react-bootstrap';
import Image1 from '../images/book1.jpg';
import Image2 from '../images/book2.jpg';
import Image3 from '../images/cover1.jpg';
import Image4 from '../images/book5.jpg';





export default function Popular() {
    return (
        <div>
            <div className='light-background'>
                <Container>
                    <div className='cate-flex'>
                        <div><h5> Popular Books</h5></div>
                        <div><h6>View All</h6></div>
                    </div>
                    <Row>
                        

                        <Col>
                            <Card style={{ width: '16rem' }}>
                                <Card.Img variant="top" src={Image1} style={{ height: "15rem", objectFit: "cover", objectPosition: "50% 50%" }} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick 
                                    </Card.Text>
                                </Card.Body>
                                
                                <Card.Body>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col>
                            <Card style={{ width: '16rem' }}>
                                <Card.Img variant="top" src={Image2} style={{ height: "15rem", objectFit: "cover", objectPosition: "50% 50%" }} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick 
                                    </Card.Text>
                                </Card.Body>
                                
                                <Card.Body>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col>
                            <Card style={{ width: '16rem' }}>
                                <Card.Img variant="top" src={Image3} style={{ height: "15rem", objectFit: "cover", objectPosition: "50% 50%" }} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick 
                                    </Card.Text>
                                </Card.Body>
                                
                                <Card.Body>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col>
                            <Card style={{ width: '16rem' }}>
                                <Card.Img variant="top" src={Image4} style={{ height: "15rem", objectFit: "cover", objectPosition: "50% 50%" }} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick 
                                    </Card.Text>
                                </Card.Body>
                                
                                <Card.Body>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    
                                </Card.Body>
                            </Card>

                        </Col>

                        



                    </Row>
                </Container>

            </div>





        </div>
    )
}
