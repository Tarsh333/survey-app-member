import React from 'react'
import { Container, Nav, Navbar,Button } from 'react-bootstrap'
import { useGlobalContext } from './Context'
const Header = () => {
    const {loggedIn,changeLogin}=useGlobalContext()
    return (
        <div>
            <Navbar bg="primary" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    {loggedIn&&<Button variant="light" onClick={()=>{changeLogin(false)}}>Log Out</Button>}
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
