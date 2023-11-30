import React from "react";
import "../styles/Navbarstyle.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from '../assets/logo.svg'

function NavBar() {
  const expand = "lg"; 


  return (
    <Navbar expand={expand} id='nabar' className='bg-white fixed-top shadow-md' >
      <Container fluid>
        <Navbar.Brand href="#">
          
          <a href="/" className="flex items-end">
            <img
              src={logo}
              srcSet={logo}
              alt="logo"
              className="h-12 w-16 my-0 mr-3"
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            <a href="/" className="flex items-end">
            <img
              src={logo}
              srcSet={logo}
              alt="logo"
              className="h-8 mr-3"
            />
          </a>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <ul className="flex  flex-col py-1.5 items-center md:p-0   rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <a
                  href="/"
                  className="text-gray-700 text-base font-medium hover:text-blue-500"
                  aria-current="page"
                >
                  الصفحة الرائيسية
                </a>
              </li>
              <li>
                <a
                  href="/Nukhba"
                  className="text-gray-700 text-base font-medium hover:text-blue-500"
                >
                  رابطة النخبة
                </a>
              </li>
              <li>
                <a
                  href="/Orgs"
                  className="text-gray-700 text-sm font-medium hover:text-blue-500"
                >
                  المنظمات  العاملة المحيطة
                </a>
              </li>
            </ul>
           </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;
