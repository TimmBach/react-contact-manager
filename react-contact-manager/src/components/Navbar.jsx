import React from "react";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import homeIcon from "../assets/home-svgrepo-com.svg";
import addIcon from "../assets/note-add-svgrepo-com.svg";
import aboutIcon from "../assets/help-question-svgrepo-com.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <NavbarBs bg="dark" variant="dark" expand="md" className="mb-3 py-1">
        <Container
          className="d-flex justify-content-between ms-auto me-auto w-100"
          style={{
            maxWidth: "1100px",
          }}
        >
          {/* <Container> */}
          <NavbarBs.Brand href="#home" className="ms-3">
            <Nav.Link to="/" as={NavLink} className="d-flex">
              Contact Manager
            </Nav.Link>
          </NavbarBs.Brand>
          <NavbarBs.Toggle aria-controls="basic-navbar-nav" className=" " />
          {/* </Container> */}
          <Container>
            <NavbarBs.Collapse
              id="basic-navbar-nav"
              style={{ marginLeft: "45vw", marginRight: "50vw" }}
            >
              <Nav className="me-auto">
                <Nav.Link to="/" as={NavLink} className="d-flex">
                  <img
                    src={homeIcon}
                    alt=""
                    style={{
                      filter:
                        "invert(56%) sepia(6%) saturate(242%) hue-rotate(163deg) brightness(89%) contrast(90%)",
                      width: "12px",
                      marginBottom: "0px",
                      marginRight: "3px",
                    }}
                  />
                  Home
                </Nav.Link>
                <Nav.Link to="/add-contact" as={NavLink} className="d-flex">
                  <img
                    src={addIcon}
                    alt=""
                    style={{
                      filter:
                        "invert(56%) sepia(6%) saturate(242%) hue-rotate(163deg) brightness(89%) contrast(90%)",
                      width: "15px",
                      marginBottom: "0px",
                      marginRight: "3px",
                    }}
                  />
                  Add
                </Nav.Link>
                <Nav.Link
                  to="/about-us"
                  as={NavLink}
                  className="d-flex"
                  //   style={{ marginRight: "40vw" }}
                >
                  <img
                    src={aboutIcon}
                    alt=""
                    style={{
                      filter:
                        "invert(56%) sepia(6%) saturate(242%) hue-rotate(163deg) brightness(89%) contrast(90%)",
                      width: "14px",
                      marginBottom: "0px",
                      marginRight: "3px",
                    }}
                  />
                  About
                </Nav.Link>
              </Nav>
            </NavbarBs.Collapse>
          </Container>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" /> */}
        </Container>
      </NavbarBs>
    </>
  );
};

export default Navbar;
