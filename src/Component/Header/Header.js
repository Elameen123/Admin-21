import React from 'react'
import {Container, Navbar} from 'react-bootstrap'

const Header = () => {
    let adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));

  return (
    <div>
        <Navbar style={{backgroundColor: "gold"}}>
            <Container>
                <Navbar.Brand href="/home">Dashboard</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    {adminDetails.email}
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header