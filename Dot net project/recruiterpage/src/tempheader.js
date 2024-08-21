// import React from 'react';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
// import { useLocation } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './tempheader.css';

// export default function Header() {
//     const location = useLocation();
 
//     return (
//         <Navbar bg="dark" variant="dark" expand="lg" className="mt-3">
//             <Navbar.Brand href="/Home">MyLogo</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="mr-auto">
//                     <LinkContainer to="/Home">
//                         <Nav.Link className={`nav-link ${location.pathname === '/Home' ? 'active' : ''}`}>HOME</Nav.Link>
//                     </LinkContainer>
//                     <NavDropdown title="Placement" id="basic-nav-dropdown">
//                         <LinkContainer to="/Batchwise">
//                             <NavDropdown.Item>Batchwise Placement</NavDropdown.Item>
//                         </LinkContainer>
//                         <LinkContainer to="/RecruiterPage">
//                             <NavDropdown.Item>Our Recruiter</NavDropdown.Item>
//                         </LinkContainer>
//                     </NavDropdown>

//                     <LinkContainer to="/About">
//                         <Nav.Link className={`nav-link ${location.pathname === '/About' ? 'active' : ''}`}>ABOUT</Nav.Link>
//                     </LinkContainer>
//                     <LinkContainer to="/About">
//                         <Nav.Link className={`nav-link ${location.pathname === '/About' ? 'active' : ''}`}>ABOUT</Nav.Link>
//                     </LinkContainer>
//                     <LinkContainer to="/Contactus">
//                         <Nav.Link className={`nav-link ${location.pathname === '/Contactus' ? 'active' : ''}`}>CONTACT</Nav.Link>
//                     </LinkContainer>
//                     <NavDropdown title="Courses" id="basic-nav-dropdown">
//                         <LinkContainer to="/course/DAC">
//                             <NavDropdown.Item>DAC</NavDropdown.Item>
//                         </LinkContainer>
//                         <LinkContainer to="/course/DBDA">
//                             <NavDropdown.Item>DBDA</NavDropdown.Item>
//                         </LinkContainer>
//                         <LinkContainer to="/course/MSCIT">
//                             <NavDropdown.Item>MSCIT</NavDropdown.Item>
//                         </LinkContainer>
//                     </NavDropdown>
//                 </Nav>
//                 <div className="nav-spacer"></div>
//                 <Nav className="ml-auto">
//                     <LinkContainer to="/SignUp">
//                         <Nav.Link className={`nav-link signup-signin-link1 ${location.pathname === '/SignUp' ? 'active' : ''}`}>SIGNUP</Nav.Link>
//                     </LinkContainer>
//                     <LinkContainer to="/SignIn">
//                         <Nav.Link className={`nav-link signup-signin-link ${location.pathname === '/SignIn' ? 'active' : ''}`}>SIGNIN</Nav.Link>
//                     </LinkContainer>
//                 </Nav>
//             </Navbar.Collapse>
//         </Navbar>
//     );
// }