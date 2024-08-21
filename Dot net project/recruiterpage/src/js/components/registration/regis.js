import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';

function Regis() {
  const [enquiries, setEnquiry] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [prefilledData, setPrefilledData] = useState(null); // State for prefilled data

  const handleFormSubmit = (formData) => {
    console.log('Form submitted with data:', formData);
    // Process form data here (e.g., send to server)
  };

  const handleSearch = async (studentname) => {
    console.log(studentname);
    const url = `http://localhost:5120/api/byname/${studentname}`;
    const student = await fetch(url);
    const data = await student.json();
    setEnquiry(data);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    handleSearch(inputValue);
  };

  const handleRegisterClick = (enquiry) => {
    setPrefilledData({
      studentName: enquiry.studentName,
      mobileNum: enquiry.mobile,
      emailId: enquiry.emailId,
    });
    setShowForm(true);
  };

  return (
    <div>
      <button className="button-spacing" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Add Form' : 'Show Add Form'}
      </button>
      {showForm && <RegistrationForm onSubmit={handleFormSubmit} prefilledData={prefilledData} />}

      <form>
        <label>Student Name:</label>
        <input
          type="text"
          name="studentname"
          placeholder="Enter Student Name"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleButtonClick}>Search</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Enquirer Name</th>
            <th>Student Name</th>
            <th>Address</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Course</th>
            <th>Staff</th>
            <th>Enquiry Date</th>
            <th>Followup Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((enquiry) => (
            <tr key={enquiry.enquiryId}>
              <td>{enquiry.enquiryId}</td>
              <td>{enquiry.enquirerName}</td>
              <td>{enquiry.studentName}</td>
              <td>{enquiry.address}</td>
              <td>{enquiry.mobile}</td>
              <td>{enquiry.emailId}</td>
              <td>{enquiry.courseName || 'N/A'}</td>
              <td>{enquiry.staffName || 'N/A'}</td>
              <td>{new Date(enquiry.enquiryDate).toLocaleDateString()}</td>
              <td>{new Date(enquiry.followUpDate).toLocaleDateString()}</td>
              <td>
                <button onClick={() => handleRegisterClick(enquiry)}>Register</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Regis;