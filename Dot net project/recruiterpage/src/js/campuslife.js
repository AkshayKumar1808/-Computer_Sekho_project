import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import '../css/CampusLife.css'; // Import your custom CSS

function CampusLife() {
  return (
    <Container fluid className="p-5 bg-light">
      <h1 className="text-center mb-5">Campus Life</h1>
      <style>
        {`
          h3 {
            color: #ffffff;
            background-color: rgba(0, 0, 0, 0.5);
            padding: 10px;
            border-radius: 5px;
            display: inline-block;
          }

          p {
            color: #f1f1f1;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
            background-color: rgba(0, 0, 0, 0.5);
            padding: 8px;
            border-radius: 4px;
            font-size: 1rem;
          }
        `}
      </style>

      {/* Carousel Section */}
      <Carousel className="mb-5">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/campuslife/img1.jpg"
            alt="Campus Events"
            style={{ maxHeight: '400px', objectFit: 'cover' }} // Adjust size
          />
          <Carousel.Caption>
            <h3>State-of-Facilities</h3>
            <p>Enhancing your learning experience with modern facilities.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/campuslife/class.jpg"
            alt="Campus Facilities"
            style={{ maxHeight: '550px', objectFit: 'cover' }} // Adjust size
          />
          <Carousel.Caption>
            <h3>Vibrant Campus Events</h3>
            <p>Experience the excitement of campus life through various events and activities.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/campuslife/final2.jpg"
            alt="Student Community"
            style={{ maxHeight: '450px', objectFit: 'cover',maxWidth:'100rem'}} // Adjust size
          />
          <Carousel.Caption>
            <h3>Diverse Student Community</h3>
            <p>Join a vibrant and diverse student body from around the world.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/campuslife/blood.jpg"
            alt="Campus Facilities"
            style={{ maxHeight: '500px', objectFit: 'cover' }} // Adjust size
          />
          <Carousel.Caption>
            <h3>Social Welfare Events</h3>
            <p>A helping hand for society welfare by blood donation camps.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Information Section */}
      <Row className="mt-5">
        <Col>
          <h2 className="text-center">Why Our Campus?</h2>
          <h6 className="text-center">
            Our campus offers a rich experience with a blend of academic excellence and social engagement. Join us and be a part of a thriving community.
          </h6>
        </Col>
      </Row>
    </Container>
  );
}

export default CampusLife;
