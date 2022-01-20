import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" >
                <Container >
                    <Navbar.Brand to="/home">BLOG </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='me-auto' >
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/writeBlog">Write Blog</Nav.Link>


                        </Nav>
                        <Nav >
                            {
                                user?.email ?
                                    <>
                                        <span>{user.displayName}</span>
                                        <Button onClick={logOut}>log out</Button>
                                    </>
                                    :
                                    <Nav.Link as={NavLink} to="/login"><Button>Login</Button></Nav.Link>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Navigation;