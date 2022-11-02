// import React from 'react'
// // import { Link } from 'react-router-dom';
// import { Container, Row, Col, Card, } from 'react-bootstrap';
// import { getBooks } from '../bookData';
// import { getBook } from '../bookData';
// import { useParams } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';


// export default function Popular() {


//     let params = useParams();
//     let book = getBook(parseInt(params.popularId, 10));
//     let books = getBooks();

//     let filterBook = [];

//     const bookFilter = () => {
//         filterBook = books.filter((item) => item.number !== book.number)
//         // filteredBook = books.filter((item) => item.number !== book.number )
//         console.log("hellooooo", filterBook)
//     }

//     bookFilter();
//     // console.log(bookFiltered)



//     return (
//         <div>
//             <div className='light-background3'>
//                 <Container>
//                     <Row >
//                         <Col >
//                             <Card style={{ width: '16rem' }}>
//                                 <Card.Img variant="top" src={book.image} style={{ height: "15rem", objectFit: "cover", objectPosition: "50% 50%" }} />
//                                 <Card.Body>
//                                     <Card.Text className='text-title'><p>Uploaded By:</p> {book.username}</Card.Text>
//                                     <Card.Text className='text-title'><p>Name Of Author:</p>{book.author} </Card.Text>
//                                     <Card.Text className='text-title' ><p>Title Of Book:</p>{book.title} </Card.Text>
//                                     <Card.Text className='text-title'><button className='btnn'>Buy</button><h3>{book.price}</h3></Card.Text>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     </Row>
//                 </Container>

//                 <Container>
//                     <Row xs={12} md={4}>
//                         {filterBook.map((list) => (
//                             <NavLink to={`/Populars/${list.number}`} key={list.number} className="links">
//                                 <Col  >
//                                     <Card style={{ width: '16rem' }}>
//                                         <Card.Img variant="top" src={book.image} style={{ height: "15rem", objectFit: "cover", objectPosition: "50% 50%" }} />
//                                         <Card.Body>
//                                             <Card.Text className='text-title'><p>Uploaded By:</p> {book.username}</Card.Text>
//                                             <Card.Text className='text-title'><p>Name Of Author:</p>{book.author} </Card.Text>
//                                             <Card.Text className='text-title' ><p>Title Of Book:</p>{book.title} </Card.Text>
//                                             <Card.Text className='text-title'><button className='btnn'>Buy</button><h3>{book.price}</h3></Card.Text>
//                                         </Card.Body>
//                                     </Card>
//                                 </Col>
//                             </NavLink>


//                         ))

//                         }

//                     </Row>
//                 </Container>



//             </div>

//         </div>
//     )
// }





import React from 'react'
import { useState, useEffect } from 'react'
// import { Button } from 'bootstrap';
import { Container, Row, Col, Card, } from 'react-bootstrap';
import { NavLink, Link, Outlet } from 'react-router-dom';
// import { getBooks } from '../bookData';
import axios from 'axios';

export default function Populars() {
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
    // books.map(item => {
    //     console.log("nanann", item.image)
    //     // item.image[0]

    // })





    return (
        <div>
            <div className='light-background3'>
                <Container>
                    <div className='cate-flex'>
                        <div><h5> Popular Books</h5></div>
                        <div><h6 ><NavLink to="/allbooks">View All</NavLink></h6></div>
                    </div>
                    <Row xs={12} md={4}>
                        {books.reverse().map((book) => (
                            <Link to={`/Populars/${book.username}`} key={book.username} className="links">
                                <Col sm={12} md={6} lg={4} xl={3} className="my-3 p-3">
                                    <Card style={{ width: '16rem' }}>

                                        {/* {console.log("kkkkk", book.image)} */}

                                        <Card.Img variant="top" src={imageUrl + book.image} crossOrigin='anonymous' alt='image' className="img-fluid" style={{ height: "15rem", objectFit: "cover", objectPosition: "50% 50%" }} />
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




