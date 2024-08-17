import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from './useAuth';
import CourseForm from './CourseForm';
import CourseTable from './CourseTable';


const Course = () => {
    const [courses, setCourses] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const { fetchData } = useAuth();

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        const url = 'http://localhost:8080/api/pta/getallcourse/course';
        try {
            const data = await fetchData(url);
            setCourses(data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    const addCourse = async (course) => {
        const url = 'http://localhost:8080/api/pta/addcourse/course';
        try {
            await fetchData(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(course),
            });
            fetchCourses();
            setShowForm(false); // Hide the form after adding the course
        } catch (error) {
            console.error('Error adding course:', error);
        }
    };
    
    const updateCourseStatus = async (id, isActive) => {
        const courseToUpdate = courses.find(course => course.courseId === id);
        
        if (!courseToUpdate) {
            console.error(`Course with ID ${id} not found`);
            return;
        }
        
        const updatedCourse = { ...courseToUpdate, courseIsActive: isActive };
        const url = `http://localhost:8080/api/pta/updatecourse/course/${id}`;
        
        console.log('Updating course:', updatedCourse); // Log the course object being sent
    
        try {
            const response = await fetchData(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedCourse),
            });
    
            console.log('Update response:', response); // Log the response from the server
    
            fetchCourses();
        } catch (error) {
            console.error('Error updating course status:', error);
        }
    };
    // const updateCourseStatus = async (id, isActive) => {
    //     const courseToUpdate = courses.find(course => course.courseId === id);
    
    //     if (!courseToUpdate) {
    //         console.error(`Course with ID ${id} not found`);
    //         return;
    //     }
    
    //     const updatedCourse = { ...courseToUpdate, courseIsActive: isActive };
    //     const url = `http://localhost:8080/api/pta/updatecourse/course/${id}`;
    
    //     console.log('Updating course:', updatedCourse); // Log the course object being sent
    
    //     try {
    //         const response = await fetch(url, {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${sessionStorage.getItem('jwt')}`, // Add JWT token here
    //             },
    //             body: JSON.stringify(updatedCourse),
    //         });
    
    //         if (response.ok) {
    //             const data = await response.json();
    //             console.log('Update response:', data); // Log the response from the server
    //             fetchCourses(); // Refresh the course list
    //         } else {
    //             console.error('Failed to update course status. Status:', response.status);
    //             const errorData = await response.json();
    //             console.error('Error details:', errorData);
    //         }
    //     } catch (error) {
    //         console.error('Error updating course status:', error);
    //     }
    // };
    return (
        <div>
            <button onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Hide Add Course Form' : 'Show Add Course Form'}
            </button>
            {showForm && <CourseForm addCourse={addCourse} />}
            <CourseTable courses={courses} updateCourseStatus={updateCourseStatus} />
        </div>
    );
};

export default Course;



// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import useAuth from './useAuth';
// import CourseForm from './CourseForm';
// import CourseTable from './CourseTable';

// const Course = () => {
//     const [courses, setCourses] = useState([]);
//     const [showForm, setShowForm] = useState(false);
//     const { fetchData } = useAuth();

//     useEffect(() => {
//         fetchCourses();
//     }, []);

//     const fetchCourses = async () => {
//         const url = 'http://localhost:8080/api/pta/getallcourse/course';
//         try {
//             const data = await fetchData(url);
//             setCourses(data);
//         } catch (error) {
//             console.error('Error fetching courses:', error);
//         }
//     };

//     const addCourse = async (course) => {
//         const url = 'http://localhost:8080/api/pta/addcourse/course';
//         try {
//             await fetchData(url, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(course),
//             });
//             fetchCourses();
//             setShowForm(false); // Hide the form after adding the course
//         } catch (error) {
//             console.error('Error adding course:', error);
//         }
//     };

//     const updateCourseStatus = async (id, isActive) => {
//         const courseToUpdate = courses.find(course => course.courseId === id);

//         if (!courseToUpdate) {
//             console.error(`Course with ID ${id} not found`);
//             return;
//         }

//         const updatedCourse = { ...courseToUpdate, courseIsActive: isActive };
//         const url = `http://localhost:8080/api/admin/updatecourse/course/${id}`;

//         console.log('Updating course:', updatedCourse); // Log the course object being sent

//         try {
//             const response = await fetchData(url, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(updatedCourse),
//             });

//             console.log('Update response:', response); // Log the response from the server

//             fetchCourses();
//         } catch (error) {
//             console.error('Error updating course status:', error);
//         }
//     };

//     return (
//         <div>
//             <button onClick={() => setShowForm(!showForm)}>
//                 {showForm ? 'Hide Add Course Form' : 'Show Add Course Form'}
//             </button>
//             {showForm && <CourseForm addCourse={addCourse} />}
//             <CourseTable courses={courses} updateCourseStatus={updateCourseStatus} />
//         </div>
//     );
// };

// export default Course;

