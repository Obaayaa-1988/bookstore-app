import React from 'react';
import { Nav, Container, Navbar, FormGroup, Form, Button, FormControl } from 'react-bootstrap';



export default function Header() {
  return (
    <div>
      <Navbar expand="lg" className='nav-bar'>
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
                style={{ fontWeight: "bolder" }}>Home</Nav.Link>
              <Nav.Link href="/book"> Add A Book</Nav.Link>
              <Nav.Link href="/signBook"> SignUp</Nav.Link>
              <Nav.Link href="/loginBook"> LogIn</Nav.Link>
              <Nav.Link href="/book-club">Join Book Club</Nav.Link>
            </Nav>
            <Form className="d-flex form-search">
              <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button style={{marginRight:"6rem", backgroundColor:"rgb(228, 114, 137)", border:"none"}}  >search</Button>

            </Form>

            <div>
            <Button  style={{ backgroundColor:"blueviolet", border:"none"}} >LogOut</Button>

            </div>

            
          </Navbar.Collapse>
        </Container>
      </Navbar>



    </div>
  )
}
