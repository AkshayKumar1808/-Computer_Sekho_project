import React, { useState, useEffect } from 'react';

export default function AddBatchForm({ addBatches }) {
    const [addBatch, setAddBatch] = useState({
        batchName: "",
        batchStartDate: "",
        batchEndTime: "",
        courseFees: null,
        batchIsActive: true,
        cid: null
    });
    const [courses, setCourses] = useState([]); // State to hold courses

    useEffect(() => {
        const fetchCourses = async () => {
            const url = '/api/pta/getcourses'; // Replace with your actual endpoint
            try {
                const response = await fetch(url);
                const data = await response.json();
                setCourses(data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setAddBatch({
            ...addBatch,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBatches(addBatch);
        console.log(addBatch);
        setAddBatch({
            batchName: "",
            batchStartDate: "",
            batchEndTime: "",
            courseFees: null,
            batchIsActive: true,
            cid: null
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="batchName">Batch Name:</label>
                <input
                    type="text"
                    id="batchName"
                    name="batchName"
                    value={addBatch.batchName || ""}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
            <div>
                <label htmlFor="batchStartDate">Start Date:</label>
                <input
                    type="datetime-local"
                    id="batchStartDate"
                    name="batchStartDate"
                    value={addBatch.batchStartDate || ""}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
            <div>
                <label htmlFor="batchEndTime">End Time:</label>
                <input
                    type="datetime-local"
                    id="batchEndTime"
                    name="batchEndTime"
                    value={addBatch.batchEndTime || ""}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
            <div>
                <label htmlFor="courseFees">Course Fees:</label>
                <input
                    type="number"
                    id="courseFees"
                    name="courseFees"
                    value={addBatch.courseFees || ""}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
            <div>
                <label htmlFor="cid">Course:</label>
                <select
                    id="cid"
                    name="cid"
                    value={addBatch.cid || ""}
                    onChange={handleChange}
                    className="form-control"
                >
                    <option value="">Select a course</option>
                    {courses.map(course => (
                        <option key={course.courseId} value={course.courseId}>
                            {course.courseName}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="batchIsActive">Active:</label>
                <input
                    type="checkbox"
                    id="batchIsActive"
                    name="batchIsActive"
                    checked={addBatch.batchIsActive || false}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
    );
}
