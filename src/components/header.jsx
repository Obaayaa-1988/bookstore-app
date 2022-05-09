import React from 'react';
import { Nav, Container, Navbar, FormGroup, Form, Button, FormControl } from 'react-bootstrap';



export default function Header() {
  return (
    <div>
      <Navbar  expand="lg" className='nav-bar'>
        <Container fluid>

          <Navbar.Brand className='brand-flex'>
          <div className='header-social'>
              <i class="fa fa-book"></i>
            </div>
            <div><h2>BookSBay</h2></div>   
          </Navbar.Brand>


          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">

            <Nav className="me-auto my-2 my-lg-0 nav-links" style={{ maxHeight: '100px' }} navbarScroll >
              <Nav.Link href="/"
              style={{fontWeight:"bolder"}}>Home</Nav.Link>
              <Nav.Link href="/book"> Add A Book</Nav.Link>
              <Nav.Link href="/signBook"> SignUp</Nav.Link>
              <Nav.Link href="/loginBook"> LogIn</Nav.Link>
              {/* <Nav.Link href="/categories">Categories</Nav.Link> */}
            </Nav>
            <Form className="d-flex mt-5 ">
                                            <FormControl type="search"placeholder="Search....." className="me-2" style={{width:"50%",boxShadow:"5px 5px 15px rgba(141, 140, 140, 0.9)"}} aria-label="Search"/>
                                            <Button variant="danger">Search</Button>
                                </Form>
            <div><button className='register-btn'>LogOut</button></div>

            {/* <Form className="d-flex form-search">
              <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success"  >search</Button>

            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>



    </div>
  )
}
