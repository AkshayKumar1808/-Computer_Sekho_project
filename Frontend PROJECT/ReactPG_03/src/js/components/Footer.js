import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Footer.css'; // Import your custom CSS

export default function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md={4} className="footer-section">
                        <h5>About Us</h5>
                        <p>We are a leading provider of educational resources and services. Our mission is to provide quality education and training.</p>
                    </Col>
                    <Col md={4} className="footer-section">
                        <h5>Contact Us</h5>
                        <p>Email: contact@example.com</p>
                        <p>Phone: +1 (234) 567-890</p>
                    </Col>
                    <Col md={4} className="footer-section">
                        <h5>Follow Us</h5>
                        <Link to="#" className="footer-link">Facebook</Link><br />
                        <Link to="#" className="footer-link">Twitter</Link><br />
                        <Link to="#" className="footer-link">LinkedIn</Link>
                    </Col>
                </Row>
            </Container>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
}
