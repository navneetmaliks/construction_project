import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
const Header = () => {
  return (
   <header>
        <div className='container py-3'>
            <Navbar expand="lg">
      
        <Navbar.Brand href="/" className='logo'>
            <span>urbanedge </span> construction
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className='nav-link'>Home</Nav.Link>
            <Nav.Link href="/about" className='nav-link'>About</Nav.Link>
            <Nav.Link href='/services' className='nav-link'>Services</Nav.Link>
            <Nav.Link href='/projects' className='nav-link'>Projects</Nav.Link>
            <Nav.Link href='/blogs' className='nav-link'>Blogs</Nav.Link>
            <Nav.Link href='/contact-us' className='nav-link'>Contactus</Nav.Link>
            <Nav.Link href='/admin/login' className='nav-link'>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>

        </div>
        
    </header>
  )
}

export default Header