import React, { useState } from 'react';

const CourseForm = ({ addCourse }) => {
    const [course, setCourse] = useState({
        courseName: '',
        courseDescription: '',
        courseDuration: '',
        courseSyllabus: '',
        courseIsActive: true,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setCourse({
            ...course,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addCourse(course);
        setCourse({
            courseName: '',
            courseDescription: '',
            courseDuration: '',
            courseSyllabus: '',
            courseIsActive: true,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Course Name:</label>
                <input
                    type="text"
                    name="courseName"
                    value={course.courseName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <input
                    type="text"
                    name="courseDescription"
                    value={course.courseDescription}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Duration (weeks):</label>
                <input
                    type="number"
                    name="courseDuration"
                    value={course.courseDuration}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Syllabus:</label>
                <input
                    type="text"
                    name="courseSyllabus"
                    value={course.courseSyllabus}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Active:</label>
                <input
                    type="checkbox"
                    name="courseIsActive"
                    checked={course.courseIsActive}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Add Course</button>
        </form>
    );
};

export default CourseForm;
