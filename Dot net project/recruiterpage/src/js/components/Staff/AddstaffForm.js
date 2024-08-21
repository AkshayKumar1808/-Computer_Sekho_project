import React, { useState } from 'react';
import './AddStaffForm.css'; // Import the CSS file

const AddStaffForm = ({ onAdd, onCancel }) => {
    const [staff, setStaff] = useState({
        staffname: "",
        staffmobile: "",
        staffemail: "",
        staffrole: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onAdd(staff);
        setStaff({
            staffname: "",
            staffmobile: "",
            staffemail: "",
            staffrole: "",
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStaff({
            ...staff,
            [name]: value,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Staff Name:</label>
                <input
                    type="text"
                    name="staffname"
                    value={staff.staffname}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Mobile:</label>
                <input
                    type="text"
                    name="staffmobile"
                    value={staff.staffmobile}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="staffemail"
                    value={staff.staffemail}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Role:</label>
                <input
                    type="text"
                    name="staffrole"
                    value={staff.staffrole}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Add Staff</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default AddStaffForm;
