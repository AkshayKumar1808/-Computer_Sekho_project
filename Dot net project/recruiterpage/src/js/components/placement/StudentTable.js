import React from 'react';

const StudentTable = ({ students }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Mobile Number</th>
                    <th>Alternate Number</th>
                    <th>DOB</th>
                    <th>Gender</th>
                    <th>Qualification</th>
                    <th>Batch</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                    <tr key={student.studentId}>
                        <td>{student.studentId}</td>
                        <td>{student.studentName}</td>
                        <td>{student.address}</td>
                        <td>{student.mobileNum}</td>
                        <td>{student.alternateNum}</td>
                        <td>{new Date(student.dob).toLocaleDateString()}</td>
                        <td>{student.studentGender}</td>
                        <td>{student.studentQualification}</td>
                        <td>{student.batch?.batchName}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default StudentTable;
