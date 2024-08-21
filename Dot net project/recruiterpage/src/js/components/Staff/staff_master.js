import React, { useState, useEffect } from 'react';
import useAuth from '../useAuth';
import StaffTable from './staffTable';
import AddStaffForm from './AddstaffForm';

export default function Staff() {
    const [staffMembers, setStaffMembers] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const { fetchData } = useAuth();

    const fetchStaff = async () => {
        const url = 'http://localhost:5120/api/pta/getstaff';
        try {
            const response = await fetchData(url);
            setStaffMembers(response);
        } catch (error) {
            console.error(error);
        }
    };

    const addStaff = async (newStaff) => {
        const url = 'http://localhost:5120/api/pta/addstaff';
        const token = localStorage.getItem('jwt1');
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newStaff),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            fetchStaff();
            setShowForm(false);
        } catch (error) {
            console.error('Error adding staff:', error);
        }
    };

    const updateStaff = async (id, staff) => {
        const url = `http://localhost:5120/api/admin/updatestaff/${id}`;
        const token = localStorage.getItem('jwt1');
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(staff),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            fetchStaff();
            setShowForm(false);
        } catch (error) {
            console.error('Error updating staff:', error);
        }
    };

    const deleteStaff = async (staffId) => {
        const url = `http://localhost:5120/api/admin/deletestaff`;
        const token = localStorage.getItem('jwt1');
        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ staffid: staffId }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            fetchStaff();
        } catch (error) {
            console.error('Error deleting staff:', error);
        }
    };

    useEffect(() => {
        fetchStaff();
    }, []);

    return (
        <div>
            <h2>Staff Management</h2>
            <button onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Cancel' : 'Add Staff'}
            </button>
            {showForm && <AddStaffForm onAdd={addStaff} onCancel={() => setShowForm(false)} />}
            <StaffTable
                staffMembers={staffMembers}
                onDelete={deleteStaff}
            />
        </div>
    );
}
