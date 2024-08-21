import React, { useState } from 'react';

const AddAnnouncementForm = ({ onAdd, onCancel }) => {
    const [announcement, setAnnouncement] = useState({
        announcementText: "",
        announcementDate: "",
        isActive: true,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onAdd(announcement);
        setAnnouncement({
            announcementText: "",
            announcementDate: "",
            isActive: true,
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAnnouncement({
            ...announcement,
            [name]: name === "isActive" ? value === "true" : value,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Announcement Text:</label>
                <textarea
                    name="announcementText"
                    value={announcement.announcementText}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Announcement Date:</label>
                <input
                    type="date"
                    name="announcementDate"
                    value={announcement.announcementDate}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Status:</label>
                <select
                    name="isActive"
                    value={announcement.isActive}
                    onChange={handleChange}
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
