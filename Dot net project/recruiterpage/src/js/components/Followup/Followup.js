import React, { useState, useEffect } from 'react';
import FollowUpUpdateForm from './FollowupUpdateForm';
import FollowUpTable from './FollowupTable';
import Modal from './Modal';
import '../css/followup.css';
import { useNavigate } from 'react-router-dom';

function Followup() {
  const [followups, setFollowups] = useState([]);
  const navigate=useNavigate();
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedFollowup, setSelectedFollowup] = useState(null);

  useEffect(() => {
    fetchFollowups();
  }, []);

  const fetchFollowups = async () => {
    const url = 'http://localhost:5120/api/pta/followup';
    try {
      const response = await fetch(url);
      const followups = await response.json();
      setFollowups(followups);
    } catch (error) {
      console.error('Error fetching follow-ups:', error);
    }
  };

  const updateFollowup = async (followup) => {
    const url = `http://localhost:5120/api/admin/updatefollowup/${followup.followupId}`;
    const token = localStorage.getItem('jwt1');
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(followup),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      fetchFollowups();
      setShowUpdateForm(false);
      navigate('/admin')
    } catch (error) {
      console.error('Error updating follow-up:', error);
    }
  };

  const deleteFollowup = async (followupId) => {
    const url = `http://localhost:5120/api/admin/delfollowup/${followupId}`;
    const token = localStorage.getItem('jwt1');
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      fetchFollowups();
    } catch (error) {
      console.error('Error deleting follow-up:', error);
    }
  };

  const handleEditClick = (followup) => {
    setSelectedFollowup(followup);
    setShowUpdateForm(true);
  };

  const closeUpdateForm = () => {
    setShowUpdateForm(false);
    setSelectedFollowup(null);
  };

  return (
    <div>
      <h2>Follow-Up Management</h2>

      {showUpdateForm && (
        <Modal onClose={closeUpdateForm}>
          <FollowUpUpdateForm
            followup={selectedFollowup}
            updateFollowup={updateFollowup}
            onClose={closeUpdateForm}
          />
        </Modal>
      )}

      <FollowUpTable
        followups={followups}
        onEdit={handleEditClick}
        onDelete={deleteFollowup}
      />
    </div>
  );
}

export default Followup;



