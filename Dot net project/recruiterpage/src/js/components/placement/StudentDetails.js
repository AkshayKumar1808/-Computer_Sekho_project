import React, { useState, useEffect } from 'react';
import useAuth from '../useAuth';
import StudentTable from './StudentTable';

export default function StudentDetails() {
    const [students, setStudents] = useState([]);
    const { fetchData } = useAuth();

    const fetchStudents = async () => {
        const url = 'http://localhost:5120/api/pta/allgetstudents'; // Replace with your actual endpoint
        try {
            const response = await fetchData(url);
            setStudents(response);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    return (
        <div>
            <h2>Student Details</h2>
            <StudentTable students={students} />
        </div>
    );
}
