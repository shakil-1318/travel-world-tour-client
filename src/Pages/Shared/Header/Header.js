import React from 'react';
import Button from 'react-bootstrap/Button'
import './Header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>

            <Navbar sticky="top" collapseOnSelect expand="lg" className='navbar' variant="dark" className='navbar' >
                <Container>
                    <Navbar.Brand href="#home">Travel World</Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className='nav-menu' as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className='nav-menu' as={HashLink} to="/home#service">Services</Nav.Link>
                        <Nav.Link className='nav-menu link' as={Link} to="/myorder">My Order</Nav.Link>
                        {
                            user.email &&
                            <NavDropdown className='nav-menu' title="Dashboard" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/addnewservice">Add Service</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/manageOrder">Manage All Order</NavDropdown.Item>

                            </NavDropdown>
                        }
                        {
                            user.email ?
                                <Button onClick={logOut} variant="primary" size="sm">
                                    Log Out
                                </Button>
                                :
                                <Nav.Link className='nav-menu link' as={Link} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text>
                            {
                                user.email && <img className='navbar-img' src={user.photoURL} alt="" />
                            }
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    );
};

export default Header;