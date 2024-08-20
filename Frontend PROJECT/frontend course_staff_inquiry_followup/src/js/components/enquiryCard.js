import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/EnquiryCard.css';

const EnquiryCard = () => {
  const [formData, setFormData] = useState({ enqname: '', course: '', equiry: '', enqemail: '', enqphone: '', enqphonealt: '' });
  const courses = ['CDAC', 'DBDA', 'MSCIT'];
  let navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);

    let demo = JSON.stringify(formData);
    fetch("http://localhost:5120/api/getintouch", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: demo
    }).then(r => { console.log(r) });

    setFormData({ enqname: '', course: '', equiry: '', enqemail: '', enqphone: '', enqphonealt: '' });
    navigate('/home');
  };

  return (
    <div className="Ecard">
      <h2 className="card-title">Enquiry Form</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="formName">Name</label>
          <input
            type="text"
            id="formName"
            name="enqname"
            placeholder="Enter your name"
            value={formData.enqname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="formCourse">Course</label>
          <select
            id="formCourse"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">Select a course</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="formEnquiry">Enquiry</label>
          <textarea
            id="formEnquiry"
            name="equiry"
            rows="5"
            placeholder="Enter your enquiry"
            value={formData.equiry}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="formEmail">Email</label>
          <input
            type="email"
            id="formEmail"
            name="enqemail"
            placeholder="Enter your email"
            value={formData.enqemail}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="formPhone">Phone</label>
            <div></div><br></br>
            <input
              type="tel"
              id="formPhone"
              name="enqphone"
              placeholder="Enter your phone number"
              value={formData.enqphone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="formAltPhone">Alternate Phone (optional)</label>
            <input
              type="tel"
              id="formAltPhone"
              name="enqphonealt"
              placeholder="Enter your alternate phone number"
              value={formData.enqphonealt}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default EnquiryCard;
