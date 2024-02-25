import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
  import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
  import AllProduct from './AllProduct';
//   import { NavLink } from 'react-router-dom';
// import { Link } from '@mui/material';
import { Link,useLocation } from 'react-router-dom';
export default function Header() {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  return (
    <header>
    <div className='container'>
    <div className='row d-flex align-items-center'>
     <div className='col-md-3'>
     <div className='lg-img'>
     <a href='#'><img src='../src/images/logo.png'></img></a>   
     </div>   
    </div>
    <div className='col-md-6'>
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <ul className='d-flex align-items-center list-unstyled'>
           <li className={splitLocation[1] === "" ? "active" : ""} > <Link className='text-decoration-none' to={'/'}>Home</Link></li>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">    
              <li className={splitLocation[1] === "AllProduct" ? "active" : ""} ><Link className= 'text-decoration-none product' to={'/AllProduct'}>Product Search</Link></li>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Shop Category
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Product Detail</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">
               Login
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tracking</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Product CheckOut</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Shopping Cart</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Confirmation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Elements</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Blog
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Single Blog</NavDropdown.Item>
            </NavDropdown>
            <li className={splitLocation[1] === "ContactUs" ? "active" : ""} > <Link className='text-decoration-none' to={'/ContactUs'}>ContactUs</Link></li>
         </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div className='col-md-3'>
    <div className='shopping-icons'>
    <Link className='text-decoration-none ' to={'/cart'}><FontAwesomeIcon icon={faShoppingBag} /></Link>
    <FontAwesomeIcon icon={faMagnifyingGlass} />  
   </div>    
    </div>  
     </div>    
     </div>    
     </header>   
  )
}
