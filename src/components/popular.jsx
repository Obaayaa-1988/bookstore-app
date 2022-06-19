import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, } from 'react-bootstrap';
import { getBooks } from '../bookData';
import { getBook } from '../bookData';
import { useParams } from 'react-router-dom';


export default function Popular() {


    let params = useParams();
    let book = getBook(parseInt(params.popularId, 10));
    let books = getBooks();

    let filteredBook = [];

    const bookFiltered = () => {
        filteredBook = books.filter((item) => item.number !== book.number )
        console.log(filteredBook)
    }

    bookFiltered();
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
                        { filteredBook.map((list) => (
                            <Link to={`/Populars/${list.number}`} key={list.number} className="links">
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
              </Link>


                        ))

                        }
                        
                    </Row>
                </Container>



            </div>

        </div>
    )
}
