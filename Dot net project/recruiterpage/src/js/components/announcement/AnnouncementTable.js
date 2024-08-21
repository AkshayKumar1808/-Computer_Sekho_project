import React from 'react';

const AnnouncementTable = ({ announcements, onUpdateStatus, onDelete }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Text</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {announcements.map((announcement) => (
                    <tr key={announcement.announcementId}>
                        <td>{announcement.announcementId}</td>
                        <td>{announcement.announcementText}</td>
                        <td>{new Date(announcement.announcementDate).toLocaleDateString()}</td>
                        <td>{announcement.isValid ? 'Active' : 'Inactive'}</td>
                        <td>
                            <button onClick={() => onUpdateStatus(announcement.announcementId, !announcement.isValid)}>
                                {announcement.isValid ? 'Deactivate' : 'Activate'}
                            </button>
                            <button onClick={() => onDelete(announcement.announcementId)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AnnouncementTable;
