import { Button } from 'bootstrap';
import React from 'react'
import { Container, Row, Col, Card, } from 'react-bootstrap';
import { NavLink, Link, Outlet } from 'react-router-dom';
import { getBooks } from '../bookData';

export default function Populars() {





    let books = getBooks();

    return (
        <div>
            <div className='light-background3'>
                <Container>
                    <div className='cate-flex'>
                        <div><h5> Popular Books</h5></div>
                        <div><h6>View All</h6></div>
                    </div>
                    <Row xs={12} md={4}>
                        {books.map((book) => (
                            <Link to={`/Populars/${book.number}`} key={book.number} className="links">
                                <Col  >
                            <Card style={{ width: '16rem' }}>
                                <Card.Img variant="top" src={book.bookImg} style={{ height: "15rem", objectFit: "cover", objectPosition: "50% 50%" }} />
                                <Card.Body>
                                    <Card.Text className='text-title'><p>Uploaded By:</p> {book.username}</Card.Text>
                                    <Card.Text className='text-title'><p>Name Of Author:</p>{book.author} </Card.Text> 
                                    <Card.Text className='text-title' ><p>Title Of Book:</p>{book.title} </Card.Text>
                                    <Card.Text className='text-title'><button className='btnn'>Buy</button><h3>{book.price}</h3></Card.Text>      
                                </Card.Body>
                            </Card>
                        </Col>
                  </Link>))}            
                    </Row>
                    <Outlet />
                </Container>
            </div>
        </div>
    )
}



