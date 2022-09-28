
import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from 'bootstrap';
import { Container, Row, Col, Card, } from 'react-bootstrap';
import { NavLink, Link, Outlet } from 'react-router-dom';
import { getBooks } from '../bookData';
import axios from 'axios';

export default function Allbooks() {
    const [books, setBooks] = useState([])

    // let books = getBooks();
    const fetchBooks = async () => {

        const response = await axios.get("http://localhost:8595/api/all-books",

            { withCredentials: true }

        )


        const { data } = response;
        console.log("my books", data.books)
        console.log(data)
        setBooks(data)

        // setBooks(data.response.books)

    }

    useEffect(() => {
        fetchBooks()
    }, [])

    const imageUrl = 'http://localhost:8595/images/'


    return (
        <div>
            <div className='light-background3'>
                <Container>
                    <div className='cate-flex'>
                        {/* <div><h5> Popular Books</h5></div>
                        <div><h6 >View All</h6></div> */}
                    </div>
                    <Row xs={12} md={4}>
                        {books.map((book) => (
                            <Link to={`/Populars/${book.username}`} key={book.username} className="links">
                                <Col sm={12} md={6} lg={4} xl={3} className= "my-3 p-3">
                            <Card style={{ width: '16rem' }}>
                                <Card.Img variant="top" src={imageUrl + book.image} crossOrigin='anonymous' alt='image' style={{ height: "15rem", objectFit: "cover", objectPosition: "50% 50%" }} />
                                <Card.Body>
                                    <Card.Text className='text-title'><p>Uploaded By:</p> {book.username}</Card.Text>
                                    <Card.Text className='text-title'><p>Name Of Author:</p>{book.author} </Card.Text> 
                                    <Card.Text className='text-title' ><p>Title Of Book:</p>{book.title} </Card.Text>
                                    <Card.Text className='text-title'><button className='btnn'>Buy</button><h3>{book.price}</h3></Card.Text>      
                                </Card.Body>
                            </Card>
                        </Col>
                  </Link>))  }            
                    </Row>
                    <Outlet />
                </Container>
            </div>
        </div>
    )
}



