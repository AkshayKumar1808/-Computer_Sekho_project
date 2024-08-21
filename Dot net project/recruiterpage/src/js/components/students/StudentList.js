import React, { useState, useEffect } from 'react';

// Sample URL for the API endpoint
const API_URL = 'http://localhost:5120/api/student/Getbatch'; // Replace with your actual API URL

const StudentList = () => {
    // State to store the array of student objects
    const [students, setStudents] = useState([]);

    // Fetch student data from the database
    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setStudents(data);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        fetchStudents();
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div>
            <h1>Student List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Mobile Number</th>
                        <th>Alternate Number</th>
                        <th>Date of Birth</th>
                        <th>Gender</th>
                        <th>Qualification</th>
                        <th>Photo</th>
                        <th>Batch</th>
                        <th>Course</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.studentName}</td>
                            <td>{student.address}</td>
                            <td>{student.mobileNum}</td>
                            <td>{student.alternateNum}</td>
                            <td>{new Date(student.dob).toLocaleDateString()}</td>
                            <td>{student.studentGender}</td>
                            <td>{student.studentQualification}</td>
                            <td>{student.studentPhoto}</td>
                            <td>{student.bId}</td>
                            <td>{student.cId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;