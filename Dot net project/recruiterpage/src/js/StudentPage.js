import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { getImageUrl } from './Utils';
import { alignProperty } from '@mui/material/styles/cssUtils';

const StudentPage = () => {
  const { batchName } = useParams(); // Correctly extract batchName
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (batchName) { // Ensure batchName is not undefined
      console.log(`Fetching data for batchName: ${batchName}`);
      fetch(`http://localhost:5120/api/student/${encodeURIComponent(batchName)}`, {
        method: 'GET',
        credentials: 'include', // This will include credentials in the request
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setStudents(data);
          setLoading(false);
        })
        .catch(err => {
          setError(err);
          setLoading(false);
        });
      
    } else {
      setError(new Error('Batch name is not defined'));
      setLoading(false);
    }
  }, [batchName]);

  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error) return <Alert variant="danger">Error: {error.message}</Alert>;

  return (
    
    <Container>
      <Row className="justify-content-center">
        {students.map(student => (
          <Col md={4} lg={3} className="mb-4" key={student.studentId}>
            <Card >
              <Card.Img variant="top" src={getImageUrl(student.studentPhoto)} alt={student.studentName} />
              
              {/* <Card.Img variant="top" src="/img/Batchwise/dac sept 22/ABHAY VIJAY_SMVITA.jpg" alt="Static Test" /> */}

              <Card.Body>
                <Card.Title>{student.studentName}</Card.Title>
                <Card.Text style={{ textAlign: 'center' }}>{student.companyName}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StudentPage;


























// import React, { useState, useEffect } from 'react';
// import { Card, Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';

// const StudentPage = () => {
//   const { batchName } = useParams();
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     console.log(`Fetching data for batchName: ${batchName}`);
//     fetch(`http://localhost:8080/api/DBDA%20March%202022`)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setStudents(data);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError(err);
//         setLoading(false);
//       });
//   }, [batchName]);

//   if (loading) return <Spinner animation="border" variant="primary" />;
//   if (error) return <Alert variant="danger">Error: {error.message}</Alert>;

//   return (
//     <Container>
//       <Row className="justify-content-center">
//         {students.map(student => (
//           <Col md={4} lg={3} className="mb-4" key={student.studentId}>
//             <Card>
//               <Card.Img variant="top" src={student.studentPhoto} alt={student.studentName} />
//               <Card.Body>
//                 <Card.Title>{student.studentName}</Card.Title>
//                 <Card.Text>{student.companyName}</Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default StudentPage;
