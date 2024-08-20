import React, { useState, useEffect } from 'react';
import '../css/RecruiterPage.css';

const RecruiterPage = () => {
  const [logos, setLogos] = useState([]); 

  useEffect(() => {       
    const fetchLogos = async () => {
      try {
        const response = await fetch('http://localhost:5120/api/logos', {
          method: 'GET',
          credentials: 'include', // Add this line
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (response.ok) {
          const data = await response.json(); //await ll pause the execution of fetchlogos function until promize is resolved
          setLogos(data);
        } else {
          console.error('Error fetching logos:', response.status);
        }
      } catch (error) {
        console.error('Error fetching logos:', error);
      }
    };

    fetchLogos();
  }, []);

  return (
    <div>
      <h1 style={{  textAlign: 'center'}}>Major Recruiters</h1> 
      <div className="logos-container">
        {logos.map((logo) => (
          <img className="image" key={logo.id} src={logo.url} alt={logo.name} />
        ))}
      </div>
    </div>
  );
}

export default RecruiterPage;
 