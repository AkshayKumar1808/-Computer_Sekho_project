import { useEffect, useState } from "react";

export default function Courses(){
    var [Courses,setCourse]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5120/api/pta/course")
        .then((res)=>res.json())
        .then((result)=>{
            console.log(result);
            setCourse(result)})
    },[])
    return(
        <>
            <h3>The Active course are</h3>
            <tbody>
                {Courses.map(Course=>(
                    <td>{Course.CourseName}</td>
                ))}
            </tbody>
        </>
         );
}
