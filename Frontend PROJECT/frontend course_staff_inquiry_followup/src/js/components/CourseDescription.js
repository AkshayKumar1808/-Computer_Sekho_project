import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const CourseDescription = () => {
  const { coursename } = useParams();
  var [message,setMessage]=useState('');
  useEffect(()=>{
    fetch(`http://localhost:5210/api/pta/course/${coursename}`)
    .then(res=>res.text())
    .then(data=>{
      console.log(data);
      setMessage(data);
    })
    .catch(error => console.error('Error fetching courses:', error))
  },[coursename])
  return (
    <div>
      <h1>{coursename}</h1>
      <p>{message}</p>
    </div>
  );
};
export default CourseDescription;
