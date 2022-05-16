import React from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { NavLink} from 'react-router-dom'

import Image from '../images/image1.jpg';

export default function SignBook() {
    return (
        <div>
            <div className='light-background3'>

                <Container>
                    <Row>
                        <Col>
                            <Card className="book-cards">
                                <h3> SIGNUP</h3>
                                <Form>
                                    <div className='contain'>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Control type="text" placeholder="Enter Username" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Control type="password" placeholder=" Confirm Password" />
                                        </Form.Group>
                                        <p> Already Have An Account? <NavLink to="/loginBook">LogIn</NavLink></p>


                                        <Button style={{backgroundColor:"blueviolet", border:"none"}} as="input" type="submit" value="Register" className="btn2" />{' '}

                                    </div>
                                </Form>

                            </Card>
                        </Col>


                        <Col>

                            <Card className="bg-light " style={{height: "100%" , marginLeft:"-2rem"}} >
                                <Card.Img src= {Image} style={{height: "100%", objectFit: "cover", objectPosition: "50% 50%", boxShadow:"5px 5px 15px rgba(141, 140, 140, 0.9)"}} alt="Card image" />
                                
                            </Card>

                        </Col>
                    </Row>
                </Container>
                
            </div>
           


        </div>
    )
}
