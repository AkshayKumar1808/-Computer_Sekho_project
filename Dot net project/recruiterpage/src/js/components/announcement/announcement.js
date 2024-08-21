import React, { useState, useEffect } from 'react';
import useAuth from '../useAuth';
import AnnouncementTable from './AnnouncementTable';
import AddAnnouncementForm from './AddAnnouncementForm';

export default function Announcement() {
    const [announcements, setAnnouncements] = useState([]);

    const [showForm, setShowForm] = useState(false);
    //const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
    const { fetchData } = useAuth();

    // const fetchAnnouncement = async () => {
    //     const url = 'http://localhost:5120/api/allAnnoucment'; // Replace with your actual endpoint
    //     try {
    //         const response = await fetchData(url);
    //         setAnnouncements(response);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
    useEffect(() => {fetch("http://localhost:5120/api/allAnnoucment")
        .then(response => response.json())
        .then(data => setAnnouncements(data))
        .catch(error=>console.error('error',error));
    },[]);

    // const addAnnouncement = async (newAnnouncement) => {
    //     const url = 'http://localhost:8080/api/admin/postannoucement'; // Replace with your actual endpoint
    //     try {
    //         await fetchData(url, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(newAnnouncement),
    //         });
    //         fetchAnnouncement();
    //         setShowForm(false);
    //     } catch (error) {
    //         console.error('Error adding Announcement:', error);
    //     }
    // };

    // const updateAnnouncement = async (id, updatedAnnouncement) => {
    //     const url = `http://localhost:8080/api/admin/putannoucement/${id}`; // Replace with your actual endpoint
    //     try {
    //         await fetchData(url, {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(updatedAnnouncement),
    //         });
    //         fetchAnnouncement();
    //     } catch (error) {
    //         console.error('Error updating Announcement:', error);
    //     }
    // };

   

    // const deleteAnnouncement = async (id) => {
    //     const url = `http://localhost:8080/api/admin/delannoucement/${id}`; // Replace with your actual endpoint
    //     try {
    //         await fetchData(url, {
    //             method: 'DELETE',
    //         });
    //         fetchAnnouncement();
    //     } catch (error) {
    //         console.error('Error deleting Announcement:', error);
    //     }
    // };

    const addAnnouncement = async (newAnnouncement) => {
        const url = 'http://localhost:5120/api/postAnnouncement';
      //  const token = localStorage.getItem('jwt1');
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                  //  Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newAnnouncement),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

          //  fetchAnnouncement();
            setShowForm(false);
        } catch (error) {
            console.error('Error adding announcement:', error);
        }
    };

    const updateAnnouncement = async (id,announcement) => {
        const url = `http://localhost:5120/api/putbyid/${id}`;
     //   const token = localStorage.getItem('jwt1');
     console.log(announcement);
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                   // Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(announcement),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

           // fetchAnnouncement();
          //  setShowForm(false);
        } catch (error) {
            console.error('Error updating announcement:', error);
        }
    };

    const updateAnnouncementStatus = async (id, isValid) => {
        console.log(id);
        const updatedAnnouncement = announcements.find(
            announcement => announcement.announcementId === id
        );
        if (updatedAnnouncement) {
            updatedAnnouncement.isValid = isValid;
            await updateAnnouncement(id, updatedAnnouncement);
        }
    };



    const deleteAnnouncement = async (announcementId) => {
        const url = `http://localhost:5120/api/deletebyid/${announcementId}`;
      //  const token = localStorage.getItem('jwt1');
        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
          //          Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

           // fetchAnnouncement();
        } catch (error) {
            console.error('Error deleting announcement:', error);
        }
    };


    // useEffect(() => {
    //    fetch("http://localhost:5120/allactiveAnnoucment")
    //    .then(response => response.json())
    //    .then(data => setAnnouncements(data))
    // }, []);

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
