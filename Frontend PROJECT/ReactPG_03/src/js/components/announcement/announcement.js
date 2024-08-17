import React, { useState, useEffect } from 'react';
import useAuth from './useAuth';
import AnnouncementTable from './AnnouncementTable';
import AddAnnouncementForm from './AddAnnouncementForm';

export default function Announcement() {
    const [announcements, setAnnouncements] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const { fetchData } = useAuth();

    const fetchAnnouncement = async () => {
        const url = '/api/pta/getannoucement'; // Replace with your actual endpoint
        try {
            const response = await fetchData(url);
            setAnnouncements(response);
        } catch (error) {
            console.error(error);
        }
    };

    const addAnnouncement = async (newAnnouncement) => {
        const url = '/api/admin/postannoucement'; // Replace with your actual endpoint
        try {
            await fetchData(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newAnnouncement),
            });
            fetchAnnouncement();
            setShowForm(false);
        } catch (error) {
            console.error('Error adding Announcement:', error);
        }
    };

    const updateAnnouncement = async (id, updatedAnnouncement) => {
        const url = `/api/admin/putannoucement/${id}`; // Replace with your actual endpoint
        try {
            await fetchData(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedAnnouncement),
            });
            fetchAnnouncement();
        } catch (error) {
            console.error('Error updating Announcement:', error);
        }
    };

    const updateAnnouncementStatus = async (id, isActive) => {
        const updatedAnnouncement = announcements.find(
            announcement => announcement.announcementId === id
        );
        if (updatedAnnouncement) {
            updatedAnnouncement.isActive = isActive;
            await updateAnnouncement(id, updatedAnnouncement);
        }
    };

    const deleteAnnouncement = async (id) => {
        const url = `/api/admin/delannoucement/${id}`; // Replace with your actual endpoint
        try {
            await fetchData(url, {
                method: 'DELETE',
            });
            fetchAnnouncement();
        } catch (error) {
            console.error('Error deleting Announcement:', error);
        }
    };

    useEffect(() => {
        fetchAnnouncement();
    }, []);

    return (
        <div>
            <h2>Announcements</h2>
            <button onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Cancel' : 'Add Announcement'}
            </button>
            {showForm && <AddAnnouncementForm onAdd={addAnnouncement} onCancel={() => setShowForm(false)} />}
            <AnnouncementTable
                announcements={announcements}
                onUpdateStatus={updateAnnouncementStatus}
                onDelete={deleteAnnouncement}
            />
        </div>
    );
}
