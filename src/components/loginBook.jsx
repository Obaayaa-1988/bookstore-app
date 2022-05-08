import React from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Image from '../images/image3.jpg';

export default function LoginBook() {
    return (
        <div>
            <div className='light-background'>

                <Container>
                    <Row>
                        <Col>
                            <Card className="book-cards">
                                <h3> LOGIN</h3>
                                <Form >
                                    <div className='contain'>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">

                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Control type="password" placeholder=" Confirm Password" />
                                        </Form.Group>

                                        <Button as="input" type="submit" value="Submit" className="btn2" />{' '}

                                    </div>
                                </Form>

                            </Card>
                        </Col>


                        <Col>

                            <Card className="bg-light form-image2">
                                <Card.Img src= {Image} alt="Card image" />
                                
                            </Card>

                        </Col>
                    </Row>
                </Container>


            </div>


        </div>
    )
}
