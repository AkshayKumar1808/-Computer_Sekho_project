import React, { useState } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const EnquiryCard = () => {
  const [formData, setFormData] = useState({
    enqName: "",
    course: "",
    enquiry: "",
    enqEmail: "",
    enqPhone: "",
    enqPhoneAlt: ""
  });
  const courses = ['CDAC', 'DBDA', 'MSCIT']; // Hardcoded course options
  let navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);

    // Example of making a POST request
    let demo = JSON.stringify(formData);
    fetch("http://localhost:8080/api/enquiries/addenquiry", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: demo
    }).then(r => { console.log(r) });

    // Reset form fields
    setFormData({
      enqName: "",
      course: "",
      enquiry: "",
      enqEmail: "",
      enqPhone: "",
      enqPhoneAlt: ""
    }
    );

    // Navigate to another page if needed
    navigate('/home');
  };

  return (
    <Card style={{ width: '40rem', margin: 'auto', marginTop: '2rem' }}>
      <Card.Body>
        <Card.Title>Enquiry Form</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="enqName"
              placeholder="Enter your name"
              value={formData.enqName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formCourse">
            <Form.Label>Course</Form.Label>
            <Form.Control
              as="select"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option>Select a course</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formEnquiry">
            <Form.Label>Enquiry</Form.Label>
            <Form.Control
              as="textarea"
              name="enquiry"
              rows={5}
              placeholder="Enter your enquiry"
              value={formData.enquiry}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="enqEmail"
              placeholder="Enter your email"
              value={formData.enqEmail}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  name="enqPhone"
                  placeholder="Enter your phone number"
                  value={formData.enqPhone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formAltPhone">
                <Form.Label>Alternate Phone (optional)</Form.Label>
                <Form.Control
                  type="tel"
                  name="enqPhoneAlt"
                  placeholder="Enter your alternate phone number"
                  value={formData.enqPhoneAlt}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Button style={{ marginTop: '2rem' }} variant="primary" type="submit" className="w-100">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default EnquiryCard;
