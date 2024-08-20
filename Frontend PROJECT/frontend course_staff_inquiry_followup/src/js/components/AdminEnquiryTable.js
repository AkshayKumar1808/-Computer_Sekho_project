import React from 'react';

const AdminEnquiryTable = ({ enquiries, updateEnquiryStatus, deleteEnquiry }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Enquirer Name</th>
                    <th>Student Name</th>
                    <th>Address </th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>Staff</th>
                    <th>Enquiry <br/>Date</th>
                    <th>Followup <br/>Date</th>
                    
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
                            
                            <button onClick={() => deleteEnquiry(enquiry.enquiryId)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AdminEnquiryTable;
