

import React, { useState } from 'react';
import './FollowupUpdateForm.css';
import { useNavigate } from 'react-router-dom';

function FollowupUpdateForm({ followup, updateFollowup, onClose }) {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    followupDate: followup.followupDate,
    followupMsg: followup.followupMsg,
    isActive: followup.isActive
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFollowup({
      ...followup,
      followupDate: formData.followupDate,
      followupMsg: formData.followupMsg,
      isActive: formData.isActive
    })
    navigate('admin/followup');;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Follow-Up Date:</label>
        <input
          type="date"
          name="followupDate"
          value={formData.followupDate.split('T')[0]}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea
          name="followupMsg"
          value={formData.followupMsg}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Is Active:</label>
        <input
          type="checkbox"
          name="isActive"
          checked={formData.isActive}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">Update Follow-Up</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </div>
    </form>
  );
}

export default FollowupUpdateForm;


