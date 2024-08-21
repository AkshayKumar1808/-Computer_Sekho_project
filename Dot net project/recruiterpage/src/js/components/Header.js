import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/header.css';


export default function Header() {
    const [courses, setCourses] = useState([]);
    const location = useLocation();

    useEffect(() => {
        // Fetch the list of courses from the backend
        fetch('http://localhost:5120/api/pta/course')
            .then(response => response.json())
            .then(data => {
                // Filter only active course
                setCourses(data);
            })
            .catch(error => console.error('Error fetching courses:', error));
    }, []);

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="mt-3">
           <Navbar.Brand href="/Home">
          <img src={"/img/logo.png"} alt="LOGO" style={{ height: '60px', width: 'auto', margin:0 }} />
           </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/Home">
                        <Nav.Link className={`nav-link ${location.pathname === '/Home' ? 'active' : ''}`}>Home</Nav.Link>
                    </LinkContainer>
                   
                    <NavDropdown title="Placement" id="basic-nav-dropdown">
                         <LinkContainer to="/Batchwise">
                             <NavDropdown.Item>Batchwise Placement</NavDropdown.Item>
                         </LinkContainer>
                         <LinkContainer to="/RecruiterPage">
                             <NavDropdown.Item>Our Recruiter</NavDropdown.Item>
                         </LinkContainer>
                     </NavDropdown>
                    <LinkContainer to="/CampusLife">
                        <Nav.Link className={`nav-link ${location.pathname === '/CampusLife' ? 'active' : ''}`}>CampusLife</Nav.Link>
                    </LinkContainer>
                    {/* <LinkContainer to="/AdminRegistration">
                        <Nav.Link className={`nav-link ${location.pathname === '/AdminRegistration' ? 'active' : ''}`}>AdminRegistration</Nav.Link>
                    </LinkContainer> */}
                
                    <NavDropdown title="Courses" id="basic-nav-dropdown">
                        {courses.map(course => (
                            <LinkContainer key={course.courseName} to={`/course/${course}`}>
                                <NavDropdown.Item>{course}</NavDropdown.Item>
                            </LinkContainer>
                        ))}
                    </NavDropdown>
                    <LinkContainer to="/Contactus">
                        <Nav.Link className={`nav-link ${location.pathname === '/Contactus' ? 'active' : ''}`}>Contact us</Nav.Link>
                    </LinkContainer>
                </Nav>
                <div className="nav-spacer"></div>
                <Nav className="ml-auto">
                    <LinkContainer to="/SignUp">
                        <Nav.Link className={`nav-link signup-signin-link1 ${location.pathname === '/SignUp' ? 'active' : ''}`}>SIGN UP</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login">
                        <Nav.Link className={`nav-link signup-signin-link ${location.pathname === '/login' ? 'active' : ''}`}>SIGN IN</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
