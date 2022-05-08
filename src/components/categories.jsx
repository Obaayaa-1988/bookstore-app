import React from 'react'
import { Container, Row, Col, Card, } from 'react-bootstrap';
import Image from '../images/image1.jpg';



export default function Categories() {
    return (
        <div>
            <div className='light-background'>
                <Container>
                    <div className='cate-flex'>
                        <div><h5> Popular Categories</h5></div>
                        <div><h6>View All</h6></div>
                    </div>
                    <Row>
                        <Col>
                            <Card border="primary" style={{ width: '12rem' }}>
                                {/* <Card.Header>Header</Card.Header> */}
                                <Card.Body>
                                    <Card.Title className='text-center pt-4'>ARTS</Card.Title>
                                    <Card.Text>
                                        <div className='card-social'>
                                            <i class="fa fa-paint-brush"></i>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card border="success" style={{ width: '12rem' }}>

                                <Card.Body>
                                    <Card.Title className='text-center pt-4'>ROMANCE</Card.Title>
                                    <Card.Text>
                                        <div className='card-social'>
                                            <i class="fa fa-heartbeat"></i>
                                        </div>

                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col>
                            <Card border="danger bold" style={{ width: '12rem' }}>

                                <Card.Body>
                                    <Card.Title className='text-center pt-4'>THRILLER</Card.Title>
                                    <Card.Text>
                                        <div className='card-social'>
                                            <i class="fa fa-bug"></i>
                                        </div>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card border="warning" style={{ width: '12rem' }}>

                                <Card.Body>
                                    <Card.Title className='text-center pt-4'>FINANCE</Card.Title>
                                    <Card.Text>
                                        <div className='card-social'>
                                            <i class="fa fa-money"></i>
                                        </div>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                        <Card border="dark" style={{ width: '12rem' }}>

                                <Card.Body>
                                    <Card.Title className='text-center pt-4'>SCIENCE</Card.Title>
                                    <Card.Text>
                                        <div className='card-social'>
                                            <i class="fa fa-flask"></i>
                                        </div>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        
                            
                        </Col>
                    </Row>
                </Container>

            </div>






        </div>
    )
}
