import React from 'react';

function FollowUpTable({ followups, onEdit, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Follow-Up ID</th>
          <th>Enquiry ID</th>
          <th>Staff ID</th>
          <th>Follow-Up Date</th>
          <th>Message</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {followups.map((followup) => (
          <tr key={followup.followupId}>
            <td>{followup.followupId}</td>
            <td>{followup.enquiry.enquiryId}</td>
            <td>{followup.staff.staffid}</td>
            <td>{followup.followupDate}</td>
            <td>{followup.followupMsg}</td>
            <td>{followup.isActive ? 'Active' : 'Inactive'}</td>
            <td>
              <button onClick={() => onEdit(followup)}>Edit</button>
              <button onClick={() => onDelete(followup.followupId)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FollowUpTable;
