
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const NavBar = () => {

        const {user,logOut} = useAuth()
    return (
            <>
            <Navbar bg="light" variant="light">
                    <Container>
                    <Navbar.Brand style={{fontSize:'2rem'}} className="m-0 text-warning"  as={Link} to="/home" >Diamond Sea</Navbar.Brand>
                    <Nav className="ms-auto text-center">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/explore">More Product</Nav.Link>
                    {
                        user?.email && <Nav.Link as={Link} to="/dash">Dashboard</Nav.Link>
                    }
                    {
                            user?.email ? <Nav.Link onClick={logOut}>Log out</Nav.Link> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }
                    
                    
                    </Nav>
                    </Container>
                    
            </Navbar>
            </>
    );
};

export default NavBar;