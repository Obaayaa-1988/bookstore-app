import React from 'react'
// import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, } from 'react-bootstrap';
import { getBooks } from '../bookData';
import { getBook } from '../bookData';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


export default function Popular() {


    let params = useParams();
    let book = getBook(parseInt(params.popularId, 10));
    let books = getBooks();

    let filterBook = [];

    const bookFilter = () => {
        filterBook = books.filter((item) => item.number !== book.number)
        // filteredBook = books.filter((item) => item.number !== book.number )
        // console.log("hellooooo", )
    }

    bookFilter();
    // console.log(bookFiltered)



    return (
        <div>
            <div className='light-background3'>
                <Container>
                    <Row >
                        <Col >
                            <Card style={{ width: '16rem' }}>
                                <Card.Img variant="top" src={book.image} style={{ height: "15rem", objectFit: "cover", objectPosition: "50% 50%" }} />
                                <Card.Body>
                                    <Card.Text className='text-title'><p>Uploaded By:</p> {book.username}</Card.Text>
                                    <Card.Text className='text-title'><p>Name Of Author:</p>{book.author} </Card.Text>
                                    <Card.Text className='text-title' ><p>Title Of Book:</p>{book.title} </Card.Text>
                                    <Card.Text className='text-title'><button className='btnn'>Buy</button><h3>{book.price}</h3></Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row xs={12} md={4}>
                        {filterBook.map((list) => (
                            <NavLink to={`/Populars/${list.number}`} key={list.number} className="links">
                                <Col  >
                                    <Card style={{ width: '16rem' }}>
                                        <Card.Img variant="top" src={book.image} style={{ height: "15rem", objectFit: "cover", objectPosition: "50% 50%" }} />
                                        <Card.Body>
                                            <Card.Text className='text-title'><p>Uploaded By:</p> {book.username}</Card.Text>
                                            <Card.Text className='text-title'><p>Name Of Author:</p>{book.author} </Card.Text>
                                            <Card.Text className='text-title' ><p>Title Of Book:</p>{book.title} </Card.Text>
                                            <Card.Text className='text-title'><button className='btnn'>Buy</button><h3>{book.price}</h3></Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </NavLink>


                        ))

                        }

                    </Row>
                </Container>



            </div>

        </div>
    )
}
