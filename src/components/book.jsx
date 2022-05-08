import React from 'react';
import { Container, Row, Col, Card, Form,  Button } from 'react-bootstrap';


export default function Book() {
    return (
        <div>
            <div className='light-background'>
                <Container>
                    <Row>
                        <Col>
                            <Card className="book-card ">
                                <h2> ADD A BOOK</h2>
                                    <Form>
                                        <div className='contain'>
                                        <Form.Group className="mb-3 " controlId="formGroupEmail">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" form-outline />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Name Of Author</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Name Of Book</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Category Of Book</Form.Label>
                                            <Form.Control type="password" />
                                        </Form.Group>

                                        <Form.Group controlId="formFile" className="mb-3">
                                            <Form.Control type="file" />
                                        </Form.Group>
                                        <Button as="input" type="submit" value="Submit" />{' '}

                                      </div>
                                    </Form>

                            </Card>
                        </Col>
                    </Row>
                </Container>



            </div>


        </div>
    )
}




