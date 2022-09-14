import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {

    const {pathname} = useRouter();

  return (
    <Navbar bg="white" variant="white" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Property-Smart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Link  href="/">
              <a className={`nav-link ${pathname == "/" ? "active" : "" }`}>Home</a>
            </Link>

            <NavDropdown title="Property" id="basic-nav-dropdown">
            <Link  href="/search?page=1&purpose=for-sale">
              <a className="dropdown-item">Property buy</a>
            </Link>

            <Link  href="/search?page=1&purpose=for-rent">
              <a className="dropdown-item">Property rent</a>
            </Link>
            </NavDropdown>

            <Link  href="/search?page=1">
              <a className={`nav-link ${pathname == "/search" ? "active" : "" }`}>search</a>
            </Link>

            <Link  href="/about">
              <a className={`nav-link ${pathname == "/about" ? "active" : "" }`}>about</a>
            </Link>

            <Link  href="/blog">
              <a className={`nav-link ${pathname == "/blog" ? "active" : "" }`}>blog</a>
            </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;