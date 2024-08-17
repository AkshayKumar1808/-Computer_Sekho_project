import React, { useState, useEffect } from 'react';
import useAuth from './useAuth';
import batchTable from './batchTable';
import AddbatchForm from './AddbatchForm';

export default function batch() {
    const [batchs, setbatchs] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const { fetchData } = useAuth();

    const fetchbatch = async () => {
        const url = '/api/pta/getannoucement'; // Replace with your actual endpoint
        try {
            const response = await fetchData(url);
            setbatchs(response);
        } catch (error) {
            console.error(error);
        }
    };

    const addbatch = async (newbatch) => {
        const url = '/api/admin/postannoucement'; // Replace with your actual endpoint
        try {
            await fetchData(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newbatch),
            });
            fetchbatch();
            setShowForm(false);
        } catch (error) {
            console.error('Error adding batch:', error);
        }
    };

    const updatebatch = async (id, updatedbatch) => {
        const url = `/api/admin/putannoucement/${id}`; // Replace with your actual endpoint
        try {
            await fetchData(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedbatch),
            });
            fetchbatch();
        } catch (error) {
            console.error('Error updating batch:', error);
        }
    };

    const updatebatchStatus = async (id, isActive) => {
        const updatedbatch = batchs.find(
            batch => batch.batchId === id
        );
        if (updatedbatch) {
            updatedbatch.isActive = isActive;
            await updatebatch(id, updatedbatch);
        }
    };

    const deletebatch = async (id) => {
        const url = `/api/admin/delannoucement/${id}`; // Replace with your actual endpoint
        try {
            await fetchData(url, {
                method: 'DELETE',
            });
            fetchbatch();
        } catch (error) {
            console.error('Error deleting batch:', error);
        }
    };

    useEffect(() => {
        fetchbatch();
    }, []);

    return (
        <div>
            <h2>batchs</h2>
            <button onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Cancel' : 'Add batch'}
            </button>
            {showForm && <AddbatchForm onAdd={addbatch} onCancel={() => setShowForm(false)} />}
            <batchTable
                batchs={batchs}
                onUpdateStatus={updatebatchStatus}
                onDelete={deletebatch}
            />
        </div>
    );
}
