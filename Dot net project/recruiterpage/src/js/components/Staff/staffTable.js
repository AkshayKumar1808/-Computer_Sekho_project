import React from 'react';

const StaffTable = ({ staffMembers, onDelete }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {staffMembers.map((staff) => (
                    <tr key={staff.staffid}>
                        <td>{staff.staffid}</td>
                        <td>{staff.staffname}</td>
                        <td>{staff.staffmobile}</td>
                        <td>{staff.staffemail}</td>
                        <td>{staff.staffrole}</td>
                        <td>
                            <button onClick={() => onDelete(staff.staffid)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default StaffTable;
