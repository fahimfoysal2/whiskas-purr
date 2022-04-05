import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const HeaderBottom = () => {
  return (
    <div className="header-bottom-main-wrap">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <div className="navbar-main-menu-wrap">
              <span>
                <span></span>
                <span></span>
                <span></span>
              </span>
              <p>Menu</p>
            </div>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <Nav.Link href="#home">Our Products</Nav.Link>

              <Nav.Link href="#link">Blog</Nav.Link>
              <Nav.Link href="#link">Our Recipes</Nav.Link>
              <Nav.Link href="#link">Breeds</Nav.Link>
              <Nav.Link href="#link">
                <span>COVID-19</span>
              </Nav.Link>
              <Nav.Link href="#link">
                <span>Purr More</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderBottom;
