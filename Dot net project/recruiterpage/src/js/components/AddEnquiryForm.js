
import React, { useState, useEffect } from "react";
import './AdminAddEnquiry.css';
import { useNavigate } from "react-router-dom";

const AdminAddEnquiry = () => {
  const [adminEnquiry, setAdminEnquiry] = useState({
    address: "",
    mobile: "",
    alternateMobile: "",
    emailId: "",
    enquirerName: "",
    studentName: "",
    enquirerQuery: "",
    enquiryDate: "",
    followUpDate: "",
    Cid:"" ,
    Sid: "",
    active: true
  });

  const [courses, setCourses] = useState([]);
  const [staff, setStaff] = useState([]);
  const navigate=useNavigate();

  const fetchData = async () => {
    try {
      const courseResponse = await fetch("http://localhost:5120/api/pta/getallcourse/course"); // Update with your API endpoint
      const staffResponse = await fetch("http://localhost:5120/api/pta/getstaff"); // Update with your API endpoint

      if (!courseResponse.ok) throw new Error("Failed to fetch courses");
      if (!staffResponse.ok) throw new Error("Failed to fetch staff");

      const courseData = await courseResponse.json();
      console.log(courseData);
      const staffData = await staffResponse.json();
      console.log(staffData);

      setCourses(courseData);
      setStaff(staffData);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdminEnquiry({ ...adminEnquiry, [name]: value });
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(adminEnquiry);
const handleSubmit = (e) => {
    e.preventDefault();
    if (!adminEnquiry.Cid || !adminEnquiry.Sid) {
      alert("Please select both course and staff.");
      return;
    }
    const enquiryData = {
      ...adminEnquiry,
    //   courseId: parseInt(adminEnquiry.courseId, 10),
    //   staffId: parseInt(adminEnquiry.staffId, 10),
      enquiryDate: new Date(adminEnquiry.enquiryDate).toISOString(),
      followUpDate: new Date(adminEnquiry.followUpDate).toISOString(),
    };
    fetch("http://localhost:5120/api/admin/Add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enquiryData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Enquiry added successfully:", data);
      })
      .catch((error) => {
        console.error("There was an error adding the enquiry!", error);
      });
      navigate('/admin');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={adminEnquiry.address}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Mobile:</label>
        <input
          type="text"
          name="mobile"
          value={adminEnquiry.mobile}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Alternate Mobile:</label>
        <input
          type="text"
          name="alternateMobile"
          value={adminEnquiry.alternateMobile}
          onChange={handleInputChange}
        />
      </div>
      <div>
                <label>Email ID:</label>
                <input
                    type="email"
                    name="emailId"
                    value={adminEnquiry.emailId}
                    onChange={handleInputChange}
                />
            </div>
      <div>
        <label>Enquirer Name:</label>
        <input
          type="text"
          name="enquirerName"
          value={adminEnquiry.enquirerName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Student Name:</label>
        <input
          type="text"
          name="studentName"
          value={adminEnquiry.studentName}
          onChange={handleInputChange}
        />
      </div>
      
      <div>
        <label>Enquirer Query:</label>
        <textarea
          name="enquirerQuery"
          value={adminEnquiry.enquirerQuery}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Enquiry Date:</label>
        <input
          type="datetime-local"
          name="enquiryDate"
          value={adminEnquiry.enquiryDate}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Follow-Up Date:</label>
        <input
          type="datetime-local"
          name="followUpDate"
          value={adminEnquiry.followUpDate}
          onChange={handleInputChange}
        />
      </div>
      
      <div>
        <label>Course Name:</label>
        <select
          name="Cid"
          value={adminEnquiry.Cid}
          onChange={handleInputChange}
        >
          <option value="">Select Course</option>
          {courses.map((course) => (
            <option key={course.courseId} value={course.courseId}>
              {course.courseName}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Staff Name:</label>
        <select
          name="Sid"
          value={adminEnquiry.Sid}
          onChange={handleInputChange}
        >
          <option value="">Select Staff</option>
          {staff.map((staffMember) => (
            <option key={staffMember.staffId} value={staffMember.staffId}>
              {staffMember.staffname}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Active:</label>
        <input
          type="checkbox"
          name="active"
          checked={adminEnquiry.active}
          onChange={(e) => setAdminEnquiry({ ...adminEnquiry, active: e.target.checked })}
        />
      </div>
      
      <button type="submit">Add Enquiry</button>
    </form>
  );
};

export default AdminAddEnquiry;















/*
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
import './AdminAddEnquiry.css';

export default function AdminAddEnquiry() {
    const {fetchData}=useAuth();
    const navigate =useNavigate();

    const [adminEnquiry, setAdminEnquiry] = useState({
        enquirerName: "",
        studentName: "",
        address: "",
        mobile: null,
        alternateMobile: null,
        emailId: "",
        enquiryDate: "",
        enquirerQuery: "",
        isActive: true,
        course: {
            courseId: null
        },
        staff: {
            staffid: null
        },
        followUpDate: ""
    });

    // Function to handle changes for basic fields
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        setAdminEnquiry(prevState => ({
            ...prevState,
            [name]: type === 'checkbox'
                ? checked
                : (name === 'mobile' || name === 'alternateMobile')
                ? Number(value)
                : value
        }));
    };

    // Function to handle changes specifically for courseId
    const handleCourseChange = (e) => {
        const { value } = e.target;

        setAdminEnquiry(prevState => ({
            ...prevState,
            course: {
                ...prevState.course,
                courseId: Number(value)
            }
        }));
    };

    // Function to handle changes specifically for staffId
    const handleStaffChange = (e) => {
        const { value } = e.target;

        setAdminEnquiry(prevState => ({
            ...prevState,
            staff: {
                ...prevState.staff,
                staffid: Number(value)
            }
        }));
    };

    const handleSubmit = async (e) => {
        
        console.log(adminEnquiry);
        // Here you would normally submit the form data to your API
        const demo=JSON.stringify(adminEnquiry);
        const url = 'http://localhost:5120/api/admin/Add';
        try {
            await fetchData(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: demo,
            });
            e.preventDefault();
            
           
        } catch (error) {
            alert('Error adding enquiry:', error);
            console.error('Error adding enquiry:', error);
        }
        
    };
    

    return (
        // <form onSubmit={handleSubmit}>
        //     <div>
        //         <label>Enquirer Name:</label>
        //         <input
        //             type="text"
        //             name="enquirerName"
        //             value={adminEnquiry.enquirerName}
        //             onChange={handleInputChange}
        //         />
        //     </div>
        //     <div>
        //         <label>Student Name:</label>
        //         <input
        //             type="text"
        //             name="studentName"
        //             value={adminEnquiry.studentName}
        //             onChange={handleInputChange}
        //         />
        //     </div>
        //     <div>
        //         <label>Address:</label>
        //         <input
        //             type="text"
        //             name="address"
        //             value={adminEnquiry.address}
        //             onChange={handleInputChange}
        //         />
        //     </div>
        //     <div>
        //         <label>Mobile:</label>
        //         <input
        //             type="number"
        //             name="mobile"
        //             value={adminEnquiry.mobile || ""}
        //             onChange={handleInputChange}
        //         />
        //     </div>
        //     <div>
        //         <label>Alternate Mobile:</label>
        //         <input
        //             type="number"
        //             name="alternateMobile"
        //             value={adminEnquiry.alternateMobile || ""}
        //             onChange={handleInputChange}
        //         />
        //     </div>
        //     <div>
        //         <label>Email ID:</label>
        //         <input
        //             type="email"
        //             name="emailId"
        //             value={adminEnquiry.emailId}
        //             onChange={handleInputChange}
        //         />
        //     </div>
        //     <div>
        //         <label>Enquiry Date:</label>
        //         <input
        //             type="date"
        //             name="enquiryDate"
        //             value={adminEnquiry.enquiryDate}
        //             onChange={handleInputChange}
        //         />
        //     </div>
        //     <div>
        //         <label>Enquirer Query:</label>
        //         <textarea
        //             name="enquirerQuery"
        //             value={adminEnquiry.enquirerQuery}
        //             onChange={handleInputChange}
        //         />
        //     </div>
        //     <div>
        //         <label>Is Active:</label>
        //         <input
        //             type="checkbox"
        //             name="isActive"
        //             checked={adminEnquiry.isActive}
        //             onChange={handleInputChange}
        //         />
        //     </div>
        //     <div>
        //         <label>Course ID:</label>
        //         <input
        //             type="number"
        //             name="courseId"
        //             value={adminEnquiry.course.courseId || ""}
        //             onChange={handleCourseChange}
        //         />
        //     </div>
        //     <div>
        //         <label>Staff ID:</label>
        //         <input
        //             type="number"
        //             name="staffId"
        //             value={adminEnquiry.staff.staffid || ""}
        //             onChange={handleStaffChange}
        //         />
        //     </div>
        //     <div>
        //         <label>Follow-Up Date:</label>
        //         <input
        //             type="date"
        //             name="followUpDate"
        //             value={adminEnquiry.followUpDate}
        //             onChange={handleInputChange}
        //         />
        //     </div>
        //     <button type="submit">Submit Enquiry</button>
        // </form>


        //------------------------------------------------------------------------------------------------------------
       <form className="admin-enquiry-form" onSubmit={handleSubmit}>
            <div className="form-group enquirer-name">
                <label>Enquirer Name:</label>
                <input
                    type="text"
                    name="enquirerName"
                    value={adminEnquiry.enquirerName}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group student-name">
                <label>Student Name:</label>
                <input
                    type="text"
                    name="studentName"
                    value={adminEnquiry.studentName}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group address">
                <label>Address:</label>
                <input
                    type="text"
                    name="address"
                    value={adminEnquiry.address}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group mobile">
                <label>Mobile:</label>
                <input
                    type="number"
                    name="mobile"
                    value={adminEnquiry.mobile || ""}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group alternate-mobile">
                <label>Alternate Mobile:</label>
                <input
                    type="number"
                    name="alternateMobile"
                    value={adminEnquiry.alternateMobile || ""}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group email-id">
                <label>Email ID:</label>
                <input
                    type="email"
                    name="emailId"
                    value={adminEnquiry.emailId}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group enquiry-date">
                <label>Enquiry Date:</label>
                <input
                    type="date"
                    name="enquiryDate"
                    value={adminEnquiry.enquiryDate}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group enquirer-query">
                <label>Enquirer Query:</label>
                <textarea
                    name="enquirerQuery"
                    value={adminEnquiry.enquirerQuery}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group is-active">
                <label>Is Active:</label>
                <input
                    type="checkbox"
                    name="isActive"
                    checked={adminEnquiry.isActive}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group course-id">
                <label>Course ID:</label>
                <input
                    type="number"
                    name="courseId"
                    value={adminEnquiry.course.courseId || ""}
                    onChange={handleCourseChange}
                />
            </div>
            <div className="form-group staff-id">
                <label>Staff ID:</label>
                <input
                    type="number"
                    name="staffId"
                    value={adminEnquiry.staff.staffid || ""}
                    onChange={handleStaffChange}
                />
            </div>
            <div className="form-group follow-up-date">
                <label>Follow-Up Date:</label>
                <input
                    type="date"
                    name="followUpDate"
                    value={adminEnquiry.followUpDate}
                    onChange={handleInputChange}
                />
            </div>
            <button className="submit-button" type="submit">Submit Enquiry</button>
        </form>
    
    );
}










































// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function adminAddEnquiry(){
//     const [adminEnquiry,setAdminEnquiry]=useState(
//         {
//             enquirerName: "",
//             studentName: "",
//             address: "",
//             mobile: null,
//             alternateMobile: null ,
//             emailId: "",
//             enquiryDate: "",
//             enquirerQuery: "",
//             isActive: true,
//             course: {
//                 courseId: null 
//             },
//             staff: {
//                 staffid:null 
//             },
//             followUpDate: ""
//         }

//     )




//     const handleInputChange = (e) => {
//         const { name, value, type, checked } = e.target;

//         setAdminEnquiry(prevState => ({
//             ...prevState,
//             [name]: type === 'checkbox'
//                 ? checked 
//                 : (name === 'mobile' || name === 'alternateMobile' || name === 'courseId' || name === 'staffId')
//                 ? Number(value) 
//                 : value 
//         }));
//     };

//     return (

//     );
// }




























///////////////////////////////////////////



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './css/AddEnquiry.css';
// import useAuth from './useAuth';
// const { fetchData } = useAuth();

// export default function EnquiryForm() {


//   const addEnquiry = async (enquiry) => {
//     const url = 'http://localhost:8080/api/admin/Add';
//     try {
//         await fetchData(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(enquiry),
//         });
//         fetchEnquiries();
//         setShowForm(false);
//     } catch (error) {
//         console.error('Error adding enquiry:', error);
//     }
// };


//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === 'checkbox') {
//       setActive(checked);
//     } else {
//       const handlers = {
//         studentName: setStudentName,
//         enquirerName: setEnquirerName,
//         address: setAddress,
//         emailId: setEmailId,
//         mobile: setMobile,
//         alternateMobile: setAlternateMobile,
//         enquirerQuery: setEnquirerQuery,
//         enquiryDate: setEnquiryDate,
//         followUpDate: setFollowUpDate,
//         courseName: setCourseName,
//         staffName: setStaffName,
//       };
//       handlers[name](value);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const enquiryData = {
//       enquirerName: setEnquirerName,
//         studentName: setStudentName,
//         address: setAddress,
//         mobile: setMobile,
//         alternateMobile: setAlternateMobile,
//         emailId: setEmailId,
//         enquiryDate: setEnquiryDate,
//         enquirerQuery: setEnquirerQuery,
//         isActive: true,
//         course: {
//           courseId: 1
//         },
//         staff: {
//           staffid: 1
//         },
//         followUpDate: setFollowUpDate
//     };
  
//     // Print the JSON data to the console
//     console.log('Enquiry Data:', JSON.stringify(enquiryData, null, 2));
  
//     try {
//       const response = await fetch('http://localhost:8080/api/pta/Add', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${sessionStorage.getItem('jwt')}`,
//         },
//         body: JSON.stringify(enquiryData),
//       });
  
//       if (!response.ok) {
//         throw new Error('Failed to add enquiry');
//       }
  
//       const result = await response.json();
//       console.log('Enquiry added successfully:', result);
//       onSubmit && onSubmit(enquiryData);  // Call onSubmit if it exists
  
//       navigate('/admin');  // Navigate to another route after successful submission
//     } catch (error) {
//       console.error('Error adding enquiry:', error.message);
//     }
//   };
  

//   return (
//     <div className="enquiry-form">
//       <h2>Submit Enquiry</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="studentName">Student Name</label>
//           <input
//             type="text"
//             id="studentName"
//             name="studentName"
//             value={studentName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="enquirerName">Enquirer Name</label>
//           <input
//             type="text"
//             id="enquirerName"
//             name="enquirerName"
//             value={enquirerName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="address">Address</label>
//           <input
//             type="text"
//             id="address"
//             name="address"
//             value={address}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="emailId">Email ID</label>
//           <input
//             type="email"
//             id="emailId"
//             name="emailId"
//             value={emailId}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="mobile">Mobile</label>
//           <input
//             type="text"
//             id="mobile"
//             name="mobile"
//             value={mobile}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="alternateMobile">Alternate Mobile</label>
//           <input
//             type="text"
//             id="alternateMobile"
//             name="alternateMobile"
//             value={alternateMobile}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="enquirerQuery">Enquirer Query</label>
//           <textarea
//             id="enquirerQuery"
//             name="enquirerQuery"
//             value={enquirerQuery}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="enquiryDate">Enquiry Date</label>
//           <input
//             type="datetime-local"
//             id="enquiryDate"
//             name="enquiryDate"
//             value={enquiryDate}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="followUpDate">Follow Up Date</label>
//           <input
//             type="datetime-local"
//             id="followUpDate"
//             name="followUpDate"
//             value={followUpDate}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="courseName">Course Name</label>
//           <input
//             type="text"
//             id="courseName"
//             name="courseName"
//             value={courseName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="staffName">Staff Name</label>
//           <input
//             type="text"
//             id="staffName"
//             name="staffName"
//             value={staffName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="active">Active</label>
//           <input
//             type="checkbox"
//             id="active"
//             name="active"
//             checked={active}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit" className="submit-button">Submit</button>
//       </form>
//     </div>
//   );
// }
*/