import React, { useState, useEffect } from 'react';

export default function BatchForm({ batch, onSave, onCancel }) {
    const [formData, setFormData] = useState({
        batchName: '',
        batchStartDate: '',
        batchEndTime: '',
        courseFees: '',
        batchIsActive: false,
        cid: ''
    });

    useEffect(() => {
        if (batch) {
            setFormData({
                batchName: batch.batchName || '',
                batchStartDate: batch.batchStartDate || '',
                batchEndTime: batch.batchEndTime || '',
                courseFees: batch.courseFees || '',
                batchIsActive: batch.batchIsActive || false,
                cid: batch.cid || ''
            });
        }
    }, [batch]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Batch Name</label>
                <input
                    type="text"
                    name="batchName"
                    value={formData.batchName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Batch Start Date</label>
                <input
                    type="date"
                    name="batchStartDate"
                    value={formData.batchStartDate}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Batch End Time</label>
                <input
                    type="time"
                    name="batchEndTime"
                    value={formData.batchEndTime}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Course Fees</label>
                <input
                    type="number"
                    name="courseFees"
                    value={formData.courseFees}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Batch Active</label>
                <input
                    type="checkbox"
                    name="batchIsActive"
                    checked={formData.batchIsActive}
                    onChange={(e) => setFormData({ ...formData, batchIsActive: e.target.checked })}
                />
            </div>
            <div>
                <label>Course ID</label>
                <input
                    type="number"
                    name="cid"
                    value={formData.cid}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Save</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
}
