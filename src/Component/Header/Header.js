import React from 'react'
import {Container, Navbar} from 'react-bootstrap'
import './Header.css'

const Header = () => {
    let adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));

  return (
    <div>
        <Navbar className="nav">
            <Container className='nav-container'>
                <Navbar.Brand href="/home" className="brand">Welcome!</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <span className='span'>Logged in as </span>
                    <p className='content'>{adminDetails.email}</p>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header