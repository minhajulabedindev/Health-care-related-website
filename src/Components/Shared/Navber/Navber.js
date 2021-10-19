import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../Images/logo/2645 (2).jpg";
import useFirebase from "../../Hooks/Firebase/useFirebase";
const Navbers = () => {
  const { user, siginOutPage } = useFirebase();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        sticky="top"
        className="text-primary"
        variant="light"
      >
        <Container>
          <Navbar.Brand>
            {" "}
            <img
              className=" rounded-circle"
              style={{ width: "50px" }}
              src={logo}
              alt=""
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {" "}
              <h5>
                {user.email ? <i class="fas fa-user fs-4"></i> : ""}{" "}
                {user.displayName}
              </h5>
            </Nav>
            <Nav className="fw-bold text-primary">
              <Nav.Link as={Link} to="/home">
                <i class="fas fa-home"></i> Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                <i class="fab fa-buromobelexperte"></i> Service
              </Nav.Link>
              <Nav.Link as={Link} to="/About">
                <i class="fas fa-sign-in-alt"></i> About
              </Nav.Link>
              {user.email ? (
                <Button
                  variant="outline-primary"
                  className="btn-sm rounded-pill"
                  onClick={siginOutPage}
                >
                  <i class="fas fa-sign-in-alt"></i> Logout
                </Button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  <i class="fas fa-sign-in-alt"></i> Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbers;
