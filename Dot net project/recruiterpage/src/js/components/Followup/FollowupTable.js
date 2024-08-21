import React from 'react';

function FollowupTable({ followups, onEdit, onDelete }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Follow-Up Date</th>
                    <th>Message</th>
                    <th>Address</th>
                    <th>Mobile</th>
                    <th>Alternate Mobile</th>
                    <th>Email</th>
                    <th>Enquirer Name</th>
                    <th>Student Name</th>
                    <th>Query</th>
                    <th>Enquiry Date</th>
                    <th>Course Name</th>
                    <th>Staff Name</th>
                    <th>Active</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {followups.map((followup) => (
                    <tr key={followup.followupId}>
                        <td>{followup.followupId}</td>
                        <td>{new Date(followup.followupDate).toLocaleDateString()}</td>
                        <td>{followup.followupMsg}</td>
                        <td>{followup.address}</td>
                        <td>{followup.mobile}</td>
                        <td>{followup.alternateMobile}</td>
                        <td>{followup.emailId}</td>
                        <td>{followup.enquirerName}</td>
                        <td>{followup.studentName}</td>
                        <td>{followup.enquirerQuery}</td>
                        <td>{new Date(followup.enquiryDate).toLocaleDateString()}</td>
                        <td>{followup.courseName}</td>
                        <td>{followup.staffname}</td>
                        <td>{followup.isActive ? 'Yes' : 'No'}</td>
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

export default FollowupTable;


/*import React from 'react';

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
            <td>{followup.followupDate}</td>
            <td>{followup.followupMsg}</td>
            <td>{followup}</td>
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

export default FollowUpTable;*/
