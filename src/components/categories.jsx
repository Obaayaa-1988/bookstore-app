import React from 'react'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';
import Image from '../images/image1.jpg';



export default function Categories() {
    return (
        <div>
            <div className='light-background'>
                <Container>
                    <Row>
                        <Col>
                            <div className='cate-flex'>
                                <div><h3>Categories</h3></div>
                                <div><h4>View All</h4></div>
                            </div>

                            <CardGroup className=' mt-5'>
                                <Card>
                                    <Card.Img variant="top" src={Image} />
                                    <Card.Body>
                                        <Card.Title className='text-center mt-2'><h2>Arts</h2></Card.Title>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src={Image} />
                                    <Card.Body>
                                        <Card.Title>Adventure</Card.Title>

                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src={Image} />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This card has even longer content than the first to
                                            show that equal height action.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                            </CardGroup>










                        </Col>
                    </Row>



                </Container>






            </div>






        </div>
    )
}
