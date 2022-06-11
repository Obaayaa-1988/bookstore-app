import React from 'react';
import { useState } from 'react'
import axios from 'axios';
import { Container, Row, Col, Card, Form,  Button } from 'react-bootstrap';
// import Footer from './components/footer';
export default function Books() {

    const [username, setUsername ] = useState("")
    const [author, setAuthor ] = useState("");
    const [title, setTitle ] = useState("")
    const [category, setCategory ] = useState("")
    const [description, setDescription ] = useState("")
    const [price, setPrice ] = useState("")


    const addBook = async (e) => {
        try {

            e.preventDefault()
            const response = await axios.post("http://localhost:8080/signup", {
                username,
                author,
                title,
                price,
                category,
                description
                

            },
            { withCredentials: true}
            
            );

            const { data } = response;
            console.log(data)
            
        } catch (error) {
            console.log(error)
            
        }
    }

    return (
        <div>
            <div className='light-background3'>
                <Container>
                    <Row>
                        <Col>
                            <Card className="book-card ">
                                <h2> ADD A BOOK</h2>
                                    <Form onSubmit={ addBook } >
                                        <div className='contain'>
                                        <Form.Group className="mb-3 " >
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" value={ username } onChange={(e) => setUsername(e.target.value)}  />
                                        </Form.Group>

                                        <Form.Group className="mb-3" >
                                            <Form.Label>Name Of Author</Form.Label>
                                            <Form.Control type="text" value={ author } onChange={(e) => setAuthor(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Name Of Book</Form.Label>
                                            <Form.Control type="text" value={ title } onChange={(e) => setTitle(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Category Of Book</Form.Label>
                                            <Form.Control type="text" value={ category } onChange={(e) => setCategory(e.target.value)}/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" >
                                            <Form.Label> Book Description</Form.Label>
                                            <Form.Control type="text" value={ description } onChange={(e) => setDescription(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label> Price Of Book</Form.Label>
                                            <Form.Control type="text" value={ price } onChange={(e) => setPrice(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group controlId="formFile" className="mb-3">
                                            <Form.Control type="file" />
                                        </Form.Group>
                                        <Button style={{backgroundColor:"rgb(226, 113, 136)", border:"none"}} as="input" type="submit" value="Submit" />

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




