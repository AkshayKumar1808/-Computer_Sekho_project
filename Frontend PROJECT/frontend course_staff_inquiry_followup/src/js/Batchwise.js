import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Batchwise = () => {
  const [batch1Images, setBatch1Images] = useState([]);
  const [batch2Images, setBatch2Images] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBatch1Images();
    fetchBatch2Images();
  }, []);

  const fetchBatch1Images = async () => {
    try {
        const response = await fetch('http://localhost:5120/api/Batch1');
        const data = await response.json();
        console.log('Batch 1 Images:', data); // Log the data here
        setBatch1Images(data);
    } catch (error) {
        console.error('Error fetching batch 1 images:', error);
    }
};

const fetchBatch2Images = async () => {
    try {
        const response = await fetch('http://localhost:5120/api/Batch2');
        const data = await response.json();
        console.log('Batch 2 Images:', data); // Log the data here
        setBatch2Images(data);
    } catch (error) {
        console.error('Error fetching batch 2 images:', error);
    }
};


  const handleRedirect = (batch) => {
    navigate(`/Batchwise/${encodeURIComponent(batch)}`);
  };
  const renderImages = (images, batch) => (
    <Row>
      {images.map((image, index) => (
        <Col key={index} sm={12} md={6} lg={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={image.url} alt={`Batch ${batch} Image ${index + 1}`} />
            <Card.Body>
              <Button variant="primary" onClick={() => handleRedirect(image.pathName)}>{image.pathName}</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
  

  return (
    <Container>
      <h2>Batch 1</h2>
     
      {renderImages(batch1Images, '1')}
      <h2>Batch 2</h2>
      {renderImages(batch2Images, '2')}
    </Container>
  );
};

export default Batchwise;
