import React, { useState, useEffect } from 'react';
import BatchTable from './BatchTable'; // Ensure correct case
import BatchForm from './BatchForm'; // Ensure correct case
import AddBatchForm from './addbatchform';

export default function BatchManagement() {
    const [batches, setBatches] = useState([]);
    const [courses, setCourses] = useState([]); // Added state for courses
    const [showForm, setShowForm] = useState(false);
    const [editingBatch, setEditingBatch] = useState(null);
    

    const fetchBatches = async () => {
        const url = `http://localhost:5120/api/Getbatch`; // Updated endpoint
        try {
            const response = await fetch(url);
            const data = await response.json();
            setBatches(data);
        } catch (error) {
            console.error('Error fetching batches:', error);
        }
    };

    const fetchCourses = async () => {
        const url = `http://localhost:5120/pta/getallcourse/course`; // Replace with your actual endpoint
        try {
            const response = await fetch(url);
            const data = await response.json();
            setCourses(data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    const addBatches = async (newBatch) => {
        const url = `http://localhost:5120/api/PostBatch`; // Updated endpoint
        try {
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBatch),
            });
            fetchBatches();
            setShowForm(false);
        } catch (error) {
            console.error('Error adding batch:', error);
        }
    };

    const updateBatch = async (id, updatedBatch) => {
        const url = `http://localhost:5120/api/PutBatchById/${id}`; // Updated endpoint
        try {
            await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedBatch),
            });
            fetchBatches();
            setShowForm(false);
            setEditingBatch(null);
        } catch (error) {
            console.error('Error updating batch:', error);
        }
    };

    const deleteBatch = async (id) => {
        const url = `http://localhost:5120/api/DeleteBatchById/${id}`; // Updated endpoint
        try {
            await fetch(url, {
                method: 'DELETE',
            });
            fetchBatches();
        } catch (error) {
            console.error('Error deleting batch:', error);
        }
    };

    

   

    useEffect(() => {
        fetchBatches();
        fetchCourses();
    }, []);

    return (
        <div>
            <h2>Batch Management</h2>
            <button className="button-spacing" onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Hide Add Form' : 'Show Add Form'}
            </button>

            {showForm && <AddBatchForm addBatches={addBatches} />}
            <BatchTable
                batches={batches}
                courses={courses} // Pass courses to BatchTable
                
                onDelete={deleteBatch}
            />
        </div>
    );
}
