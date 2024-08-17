import React from 'react';

function Reg() {
  return (
    <div>
      <h2>Registration Page</h2>
      <p>This is the Registration page. Here you can manage registrations.</p>
      {/* You can add a table or any other UI component here */}
    </div>
  );
}

export default Reg;



















// import React, { useState, useEffect } from 'react';
// import { Form, Button, Container } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate } from 'react-router-dom';
// import '../css/Reg.css';

// function Reg() {
//   const [Registration, setRegistration] = useState({
//     name: '',
//     dateOfBirth: '',
//     gender: '',
//     resAddress: '',
//     officeAddress: '',
//     phone: '',
//     email: '',
//     educationalQualification: '',
//     courseEnrolled: '',
//     startingFrom: '',
//     paymentMode: '',
//     paymentAmount: '',
//     bankName: '',
//     bankDate: ''
//   });

//   const [courses, setCourses] = useState([]);
//   let navigate = useNavigate();

//   useEffect(() => {
//     // Fetch course data from the backend
//     fetch('http://localhost:8080/api/courses')
//       .then(response => response.json())
//       .then(data => setCourses(data))
//       .catch(error => console.error('Error fetching courses:', error));
//   }, []);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setRegistration((prevValues) => ({ ...prevValues, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     let demo = JSON.stringify(Registration);

//     fetch("https://localhost:7115/api/Employee", {
//       method: 'POST',
//       headers: { 'Content-type': 'application/json' },
//       body: demo
//     }).then(r => { console.log(r) });

//     navigate('/');
//   };

//   const validateForm = () => {
//     const phonePattern = /^[0-9]{10}$/;
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!phonePattern.test(Registration.phone)) {
//       alert('Please enter a valid 10-digit phone number.');
//       return false;
//     }

//     if (!emailPattern.test(Registration.email)) {
//       alert('Please enter a valid email address.');
//       return false;
//     }

//     if (parseFloat(Registration.paymentAmount) <= 0) {
//       alert('Payment amount must be a positive number.');
//       return false;
//     }

//     if (Registration.paymentMode !== 'cash' && (!Registration.bankName || !Registration.bankDate)) {
//       alert('Please provide bank name and bank date for non-cash payments.');
//       return false;
//     }

//     return true;
//   };

//   return (
//     <Container>
//       <Form onSubmit={handleSubmit} className="reg-form">
//         <h2>Registration Form</h2>
//         <Form.Group controlId="name">
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             type="text"
//             name="name"
//             value={Registration.name}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>
//         <Form.Group controlId="dateOfBirth">
//           <Form.Label>Date of Birth</Form.Label>
//           <Form.Control
//             type="date"
//             name="dateOfBirth"
//             value={Registration.dateOfBirth}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>
//         <Form.Group controlId="gender">
//           <Form.Label>Gender</Form.Label>
//           <Form.Control
//             as="select"
//             name="gender"
//             value={Registration.gender}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </Form.Control>
//         </Form.Group>
//         <Form.Group controlId="resAddress">
//           <Form.Label>Residential Address</Form.Label>
//           <Form.Control
//             as="textarea"
//             name="resAddress"
//             value={Registration.resAddress}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>
//         <Form.Group controlId="officeAddress">
//           <Form.Label>Office Address</Form.Label>
//           <Form.Control
//             as="textarea"
//             name="officeAddress"
//             value={Registration.officeAddress}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group controlId="phone">
//           <Form.Label>Phone</Form.Label>
//           <Form.Control
//             type="tel"
//             name="phone"
//             value={Registration.phone}
//             onChange={handleChange}
//             pattern="[0-9]{10}"
//             required
//           />
//         </Form.Group>
//         <Form.Group controlId="email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             name="email"
//             value={Registration.email}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>
//         <Form.Group controlId="educationalQualification">
//           <Form.Label>Educational Qualification</Form.Label>
//           <Form.Control
//             type="text"
//             name="educationalQualification"
//             value={Registration.educationalQualification}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>
//         <Form.Group controlId="courseEnrolled">
//           <Form.Label>Course Enrolled For</Form.Label>
//           <Form.Control
//             as="select"
//             name="courseEnrolled"
//             value={Registration.courseEnrolled}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Course</option>
//             {courses.map(course => (
//               <option key={course.course_id} value={course.course_name}>
//                 {course.course_name}
//               </option>
//             ))}
//           </Form.Control>
//         </Form.Group>
//         <Form.Group controlId="startingFrom">
//           <Form.Label>Starting From</Form.Label>
//           <Form.Control
//             type="date"
//             name="startingFrom"
//             value={Registration.startingFrom}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>
//         <h3>Payment Details</h3>
//         <Form.Group controlId="paymentMode">
//           <Form.Label>Payment Mode</Form.Label>
//           <Form.Control
//             as="select"
//             name="paymentMode"
//             value={Registration.paymentMode}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Payment Mode</option>
//             <option value="cash">Cash</option>
//             <option value="cheque">Cheque</option>
//             <option value="online">Online</option>
//           </Form.Control>
//         </Form.Group>
//         <Form.Group controlId="paymentAmount">
//           <Form.Label>Payment Amount</Form.Label>
//           <Form.Control
//             type="number"
//             name="paymentAmount"
//             value={Registration.paymentAmount}
//             onChange={handleChange}
//             min="1"
//             required
//           />
//         </Form.Group>
//         <Form.Group controlId="bankName">
//           <Form.Label>Bank Name</Form.Label>
//           <Form.Control
//             type="text"
//             name="bankName"
//             value={Registration.bankName}
//             onChange={handleChange}
//             disabled={Registration.paymentMode === 'cash'}
//             required={Registration.paymentMode !== 'cash'}
//           />
//         </Form.Group>
//         <Form.Group controlId="bankDate">
//           <Form.Label>Bank Date</Form.Label>
//           <Form.Control
//             type="date"
//             name="bankDate"
//             value={Registration.bankDate}
//             onChange={handleChange}
//             disabled={Registration.paymentMode === 'cash'}
//             required={Registration.paymentMode !== 'cash'}
//           />
//         </Form.Group>
//         <Button type="submit" className="mt-3">Submit</Button>
//       </Form>
//     </Container>
//   );
// }

// export default Reg;
