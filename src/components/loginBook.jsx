import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { NavLink} from 'react-router-dom'

import Image from '../images/image3.jpg';

export default function LoginBook() {

    const [email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("")



    const userLogin = async (e) => {
        try {

            e.preventDefault()
            const response = await axios.get("http://localhost:8080/login", {
                email,
                password,

            })
            
        } catch (error) {   
            
        }



    }



    return (
        <div>
            <div className='light-background3'>

                <Container>
                    <Row>
                        <Col>
                            <Card className="book-cards">
                                <h3> LOGIN</h3>
                                <Form onSubmit={ userLogin} >
                                    <div className='contain'>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Control type="email" placeholder="Enter email" value={ email} onChange={(e) => setEmail(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">

                                            <Form.Control type="password" placeholder="Password" value={ password} onChange={(e) => setPassword(e.target.value)}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Control type="password" placeholder=" Confirm Password" value={ confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value)} />
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
