import React, { useState } from 'react';

const AddAnnouncementForm = ({ onAdd, onCancel }) => {
    const [announcementText, setAnnouncementText] = useState('');
    const [announcementDate, setAnnouncementDate] = useState('');
    const [isActive, setIsActive] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newAnnouncement = {
            announcementText,
            announcementDate: new Date(announcementDate),
            isActive,
        };
        await onAdd(newAnnouncement);
        setAnnouncementText('');
        setAnnouncementDate('');
        setIsActive(true);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Announcement Text:</label>
                <textarea
                    value={announcementText}
                    onChange={(e) => setAnnouncementText(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Announcement Date:</label>
                <input
                    type="date"
                    value={announcementDate}
                    onChange={(e) => setAnnouncementDate(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Status:</label>
                <select
                    value={isActive}
                    onChange={(e) => setIsActive(e.target.value === 'true')}
                >
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                </select>
            </div>
            <button type="submit">Add Announcement</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default AddAnnouncementForm;
