import React, { useState } from 'react';
import '../css/signup.css';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [staffid, setStaffid] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const adminData = {
                name: name,
                email: email,
                password: password,
              //  staffid: { staffid: staffid }
            };
            //http://localhost:8080/api/pta/adminSignup

            const response = await fetch('http://localhost:5120/api/Auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(adminData),
            });

            if (response.status === 201) {
                alert('Admin added successfully!');
            } else {
                const errorData = await response.json();
                alert(`Failed to add admin: ${errorData.message || response.statusText}`);
            }
        } catch (error) {
            console.error('There was an error!', error);
            alert('Failed to add admin');
        }
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Admin Signup</h2>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                
                <button type="submit" className="signup-button">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;
/**
 * <div className="form-group">
                    <label>Staff ID:</label>
                    <input
                        type="text"
                        value={staffid}
                        onChange={(e) => setStaffid(e.target.value)}
                        required
                    />
                </div>
 */