import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FANTASIA = () => {
  const { course_name } = useParams();
  var [message,setMessage]=useState('');
  useEffect(()=>{
    fetch(`http://localhost:8080/api/course/${course_name}`)
    .then(res=>res.text())
    .then(data=>{
      console.log(data);
      setMessage(data);
    })
    .catch(error => console.error('Error fetching courses:', error))
  },[course_name])
  return (
    <div>
      <h1>{course_name}</h1>
      <p>{message}</p>
    </div>
  );
};

export default FANTASIA;
