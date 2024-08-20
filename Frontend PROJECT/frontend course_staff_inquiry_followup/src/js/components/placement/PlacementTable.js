import React from 'react';

const PlacementTable = ({ placements, onDelete }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Student</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Duration</th>
                    <th>Company Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {placements.map((placement) => (
                    <tr key={placement.placementId}>
                        <td>{placement.placementId}</td>
                        <td>{placement.student.studentName}</td>
                        <td>{placement.course.courseName}</td>
                        <td>{placement.batch.batchName}</td>
                        <td>{placement.duration}</td>
                        <td>{placement.companyName}</td>
                        <td>
                            <button onClick={() => onDelete(placement.placementId)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default PlacementTable;
