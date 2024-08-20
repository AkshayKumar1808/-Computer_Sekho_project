import React from 'react';

const CourseTable = ({ courses, updateCourseStatus }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Course Name</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Syllabus</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {courses.map((course) => (
                    <tr key={course.courseId}>
                        <td>{course.courseName}</td>
                        <td>{course.courseDescription}</td>
                        <td>{course.courseDuration}</td>
                        <td>{course.courseSyllabus}</td>
                        <td>{course.courseIsActive ? 'Active' : 'Inactive'}</td>
                        <td>
                            <button onClick={() => updateCourseStatus(course.courseId, !course.courseIsActive)}>
                                {course.courseIsActive ? 'Deactivate' : 'Activate'}
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CourseTable;
