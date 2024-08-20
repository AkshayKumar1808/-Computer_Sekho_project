import React, { useState, useEffect } from 'react';
import useAuth from '../useAuth';
import PlacementTable from './PlacementTable';
import AddPlacementForm from './AddPlacementForm';

export default function Placement() {
    const [placements, setPlacements] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const { fetchData } = useAuth();

    const fetchPlacements = async () => {
        const url = 'http://localhost:5120/api/pta/allgetplacements'; // Replace with your actual endpoint
        try {
            const response = await fetchData(url);
            setPlacements(response);
        } catch (error) {
            console.error(error);
        }
    };

    const addPlacement = async (newPlacement) => {
        const url = 'http://localhost:5120/api/admin/postplacement';
        const token = localStorage.getItem('jwt1');
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPlacement),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            fetchPlacements();
            setShowForm(false);
        } catch (error) {
            console.error('Error adding placement:', error);
        }
    };

    const updatePlacement = async (id, placement) => {
        const url = `http://localhost:5120/api/admin/putplacement/${id}`;
        const token = localStorage.getItem('jwt1');
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(placement),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            fetchPlacements();
            setShowForm(false);
        } catch (error) {
            console.error('Error updating placement:', error);
        }
    };

    const deletePlacement = async (placementId) => {
        const url = `http://localhost:5120/api/admin/delplacement/${placementId}`;
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

            fetchPlacements();
        } catch (error) {
            console.error('Error deleting placement:', error);
        }
    };

    useEffect(() => {
        fetchPlacements();
    }, []);

    return (
        <div>
            <h2>Placements</h2>
            <button onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Cancel' : 'Add Placement'}
            </button>
            {showForm && <AddPlacementForm onAdd={addPlacement} onCancel={() => setShowForm(false)} />}
            <PlacementTable
                placements={placements}
                onDelete={deletePlacement}
            />
        </div>
    );
}
