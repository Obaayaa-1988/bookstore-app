import React from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { NavLink} from 'react-router-dom'

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
                                        <p className='book-link'> Don't have an account? <NavLink to="/signBook">SignUp</NavLink></p>

                                        <Button style={{backgroundColor:"blueviolet", border:"none"}} as="input" type="submit" value="LogIn" className="btn2" />

                                    </div>
                                </Form>

                            </Card>
                        </Col>


                        <Col>

                            <Card className="bg-light" style={{height: "100%" , marginLeft:"-2rem"}}>
                                <Card.Img src= {Image} alt="Card image" style={{height: "100%", objectFit: "cover", objectPosition: "50% 50%", boxShadow:"5px 5px 15px rgba(141, 140, 140, 0.9)"}}  />
                                
                            </Card>

                        </Col>
                    </Row>
                </Container>

                


            </div>


        </div>
    )
}
