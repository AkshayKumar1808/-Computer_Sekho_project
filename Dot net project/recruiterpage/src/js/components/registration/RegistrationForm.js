/*
import React, { useEffect, useState } from 'react';

function RegistrationForm({prefilledData,onSubmit}) {
  const [showPayment, setShowPayment] = useState(false);
  const [courses, setCourses] = useState([]);
  const [batches,setBatach]=useState([]);
  const [formData, setFormData] = useState({
    studentName: prefilledData?.studentName || '',
    mobileNum: prefilledData?.mobileNum || '',
   // emailId: prefilledData?.emailId || '',
    // Add other fields as needed


    student: {
    address: "",
    studentName: prefilledData?.studentName || '',
    mobileNum: prefilledData?.mobileNum || '',
    alternateNum: null,
    dob: "",
    studentGender: "",
    studentQualification: "",
    studentPhoto: "",
    batchName: "",
    courseName: ""
  },
  payment: {
    amount: null,
    paymentType: "",
    date: "",
    transactionNo: ""
  }

  });

  const handleCheckboxChange = () => {
    setShowPayment(!showPayment);
  };

  const handlestudentchange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      student: { ...prevData.student,
         [name]:(name==='mobileNum'||name==='alternateNum')?Number(value):value },
      [name]: value
    }));
  };
  const handlepaymentChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      payment: { ...prevData.payment,
         [name]: (name==='amount')?Number(value): value }
      
    }));
  };

  const fetchCourses = async () => {
    try {
      const response = await fetch('http://localhost:5120/api/pta/getallcourse/course'); // Adjust the endpoint as needed
      if (response.ok) {
        const data = await response.json();
        const activeCourses = data.filter(course => course.courseIsActive);
        setCourses(activeCourses);
      } else {
        console.error('Error fetching courses:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const fetchbatches = async () => {
    try {
      const response = await fetch('http://localhost:5120/api/Getbatch'); // Adjust the endpoint as needed
      if (response.ok) {
        const data = await response.json();
        const activeCourses = data.filter(batch => batch.batchIsActive);
        setBatach(activeCourses);
      } else {
        console.error('Error fetching courses:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };
  useEffect(()=>{
    fetchCourses();
    fetchbatches();
  },[])
  
  const poststudent=()=>{

   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   // onSubmit(formData);
    const url="http://localhost:5120/api/reg"
    console.log(formData);
    const data=JSON.stringify(formData);
    fetch(url,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        body:data
      }
    }).then(r=>{console.log(r)})
    
  };

  return (
    <div>
        
    <form onSubmit={handleSubmit}>
      <div>
        <label>Student Name:</label>
        <input type="text" 
        name="studentName" 
        value={formData.student.studentName||""}
        onChange={handlestudentchange}
        required />
      </div>
      <div>
        <label>Address:</label>
        <input 
        type="text" 
        name="address"
       // value={formData.student.mobileNum||""}
        onChange={handlestudentchange}
        required
         />
      </div>
      <div>
        <label>Mobile Number:</label>
        <input 
        type="tel"
        name="mobileNum"
        value={formData.student.mobileNum||""}
        onChange={handlestudentchange}
        required
         />
      </div>
      <div>
        <label>Alternate Number:</label>
        <input 
        type="tel" 
        name="alternateNum"
       // value={formData.student.alternateNum||""}
        onChange={handlestudentchange}
         />
      </div>
      <div>
        <label>Date of Birth:</label>
        <input 
        type="date" 
        name="dob"
       // value={formData.student.dob||""}
        onChange={handlestudentchange}
        required
         />
      </div>
      <div>
        <label>Gender:</label>
        <select name="studentGender" onChange={handlestudentchange} required>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div>
        <label>Qualification:</label>
        <input 
        type="text" 
        name="studentQualification"
//value={formData.student.studentQualification||""}
        onChange={handlestudentchange}
        required
         />
      </div>
      <div>
        <label>studentPhoto:</label>
        <input 
        type="text" 
        name="studentPhoto"
//value={formData.student.studentQualification||""}
        onChange={handlestudentchange}
        required
         />
      </div>
      <div>
        <label>Batch:</label>
        <select name="batchName" onChange={handlestudentchange}>
        <option value={0}>Select a Batch</option>
          {batches.map(batch => (
            <option key={batch.batchId} value={batch.batchName}>
              {batch.batchName}
            </option>
          ))}

        </select>
      </div>
      <div>
        <label>Course:</label>
        <select name="courseName" onChange={handlestudentchange}>
        <option value={0}>Select a course</option>
          {courses.map(course => (
            <option key={course.courseId} value={course.courseName}>
              {course.courseName}
            </option>
          ))}
        </select>
      </div>
      <div>
        <input 
          type="checkbox" 
          id="makePayment" 
          checked={showPayment} 
          onChange={handleCheckboxChange} 
        />
        <label htmlFor="makePayment">Payment details</label>
      </div>
      
      {showPayment && (
        <div>
        <div id="paymentDetails">
          <div>
            <label>Payment Amount:</label>
            <input 
            type="number" 
            name="amount" 
            onChange={handlepaymentChange}
            required/>
          </div>
          <div>
            <label>Payment Type:</label>
            <input 
            type="text" 
            name="paymentType" 
            onChange={handlepaymentChange}
            required/>
          </div>
          <div>
            <label>Date:</label>
            <input 
            type="date" 
            name="date"
            onChange={handlepaymentChange} 
            required/>
          </div>
          <div>
            <label>Check/UID No:</label>
            <input 
            type="text" 
            name="transactionNo"
            onChange={handlepaymentChange}
            required />
          </div>
        </div>
      <button type="submit">Submit</button>
      </div>
      )}
      
      
    </form>
    </div>
  );
}

export default RegistrationForm;

*/











//--------------------------------------------------------------------------------------------
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegistrationForm({ prefilledData, onSubmit }) {
  const [showPayment, setShowPayment] = useState(false);
  const navigate=useNavigate();
  const [courses, setCourses] = useState([]);
  const [batches, setBatches] = useState([]);
  const [formData, setFormData] = useState({
    student: {
      studentName: prefilledData?.studentName || '',
      mobileNum: prefilledData?.mobileNum || '',
      address: "",
      alternateNum: null,
      dob: "",
      studentGender: "",
      studentQualification: "",
      studentPhoto: "",
      batchName: "",
      courseName: ""
    },
    payment: {
      amount: null,
      paymentType: "",
      date: "",
      transactionNo: ""
    }
  });

  const handleCheckboxChange = () => {
    setShowPayment(!showPayment);
  };

  const handlestudentchange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      student: {
        ...prevData.student,
        [name]: (name === 'mobileNum' || name === 'alternateNum') ? Number(value) : value
      }
    }));
  };

  const handlepaymentChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      payment: {
        ...prevData.payment,
        [name]: name === 'amount' ? Number(value) : value
      }
    }));
  };

  const fetchCourses = async () => {
    try {
      const response = await fetch('http://localhost:5120/api/pta/getallcourse/course'); // Adjust the endpoint as needed
      if (response.ok) {
        const data = await response.json();
        const activeCourses = data.filter(course => course.courseIsActive);
        setCourses(activeCourses);
      } else {
        console.error('Error fetching courses:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const fetchBatches = async () => {
    try {
      const response = await fetch('http://localhost:5120/api/Getbatch'); // Adjust the endpoint as needed
      if (response.ok) {
        const data = await response.json();
        const activeBatches = data.filter(batch => batch.batchIsActive);
        setBatches(activeBatches);
      } else {
        console.error('Error fetching batches:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching batches:', error);
    }
  };

  useEffect(() => {
    fetchCourses();
    fetchBatches();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "http://localhost:5120/api/reg";
    console.log(formData);

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    setFormData({
      student: {
        studentName: "",
        mobileNum: "",
        address: "",
        alternateNum: null,
        dob: "",
        studentGender: "",
        studentQualification: "",
        studentPhoto: "",
        batchName: "",
        courseName: ""
      },
      payment: {
        amount: null,
        paymentType: "",
        date: "",
        transactionNo: ""
      }
    });
    navigate('admin/regis');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Student Name:</label>
          <input
            type="text"
            name="studentName"
            value={formData.student.studentName || ""}
            onChange={handlestudentchange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            onChange={handlestudentchange}
            required
          />
        </div>
        <div>
          <label>Mobile Number:</label>
          <input
            type="tel"
            name="mobileNum"
            value={formData.student.mobileNum || ""}
            onChange={handlestudentchange}
            required
          />
        </div>
        <div>
          <label>Alternate Number:</label>
          <input
            type="tel"
            name="alternateNum"
            onChange={handlestudentchange}
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            onChange={handlestudentchange}
            required
          />
        </div>
        <div>
          <label>Gender:</label>
          <select name="studentGender" onChange={handlestudentchange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label>Qualification:</label>
          <input
            type="text"
            name="studentQualification"
            onChange={handlestudentchange}
            required
          />
        </div>
        <div>
          <label>Student Photo:</label>
          <input
            type="text"
            name="studentPhoto"
            onChange={handlestudentchange}
            required
          />
        </div>
        <div>
          <label>Batch:</label>
          <select name="batchName" onChange={handlestudentchange}>
            <option value="">Select a Batch</option>
            {batches.map(batch => (
              <option key={batch.batchId} value={batch.batchName}>
                {batch.batchName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Course:</label>
          <select name="courseName" onChange={handlestudentchange}>
            <option value="">Select a Course</option>
            {courses.map(course => (
              <option key={course.courseId} value={course.courseName}>
                {course.courseName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="checkbox"
            id="makePayment"
            checked={showPayment}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="makePayment">Payment details</label>
        </div>

        {showPayment && (
          <div>
            <div id="paymentDetails">
              <div>
                <label>Payment Amount:</label>
                <input
                  type="number"
                  name="amount"
                  onChange={handlepaymentChange}
                  required
                />
              </div>
              <div>
                <label>Payment Type:</label>
                <input
                  type="text"
                  name="paymentType"
                  onChange={handlepaymentChange}
                  required
                />
              </div>
              <div>
                <label>Date:</label>
                <input
                  type="date"
                  name="date"
                  onChange={handlepaymentChange}
                  required
                />
              </div>
              <div>
                <label>Check/UID No:</label>
                <input
                  type="text"
                  name="transactionNo"
                  onChange={handlepaymentChange}
                  required
                />
              </div>
            </div>
            <button type="submit">Submit</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default RegistrationForm;
