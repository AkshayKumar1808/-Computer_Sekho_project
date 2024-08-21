import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/PGDAC.css'; // Import the CSS file for styling

const PGDAC = () => {
  const { course_name } = useParams();
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5120/api/course/${course_name}`)
      .then(res => res.text())
      .then(data => {
        console.log(data);
        setMessage(data);
      })
      .catch(error => console.error('Error fetching courses:', error));
  }, [course_name]);

  return (
    <div className="pgdac-container">
      <h1 className="pgdac-title">{course_name}</h1>
      <p className="pgdac-message">{message}</p>
    </div>
  );
};

export default PGDAC;
