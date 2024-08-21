import React from 'react';

export default function BatchTable({ batches, courses, onUpdateStatus, onUpdate, onDelete }) {
    
    // Helper function to get course name by ID
    const getCourseName = (cid) => {
        const course = courses.find(course => course.courseId === cid);
        return course ? course.courseName : 'Unknown';
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Batch Name</th>
                    <th>Start Date</th>
                    <th>End Time</th>
                    <th>Course Name</th>
                    <th>Course Fees</th>
                    <th>Active</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {batches.map((batch) => (
                    <tr key={batch.batchId}>
                        <td>{batch.batchName}</td>
                        <td>{batch.batchStartDate}</td>
                        <td>{batch.batchEndTime}</td>
                        <td>{getCourseName(batch.cid)}</td>
                        <td>{batch.courseFees}</td>
                        <td>
                            <input
                                type="checkbox"
                                checked={batch.batchIsActive}
                                onChange={() => onUpdateStatus(batch.batchId, !batch.batchIsActive)}
                            />
                        </td>
                        <td>
                            <button onClick={() => onUpdate(batch)}>Edit</button>
                            <button onClick={() => onDelete(batch.batchId)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
