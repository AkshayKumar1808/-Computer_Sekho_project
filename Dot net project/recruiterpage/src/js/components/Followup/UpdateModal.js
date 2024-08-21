import React from 'react';
import Modal from 'react-modal';

const UpdateModal = ({ isOpen, onRequestClose, followup, updateFollowup }) => {
    const [formData, setFormData] = useState({
        followupId: null,
        enquiry: {
            enquiryId: null,
          },
          staff: {
            staffid: null,
          },
        followupMsg: '',
        isActive: true,
        followupDate: ""
        // add other fields as necessary
    });

    useEffect(() => {
        if (followup) {
            setFormData({
                followupId: followup.followupId,
                enquiryId: followup.enquiry.enquiryId,
                followupMsg: followup.followupMsg,
                // set other fields as necessary
            });
        }
    }, [followup]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateFollowup(formData);
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Update Follow-Up"
            ariaHideApp={false} // Add this to avoid warnings if your app does not have a root element with `aria-hidden`
        >
            <h2>Update Follow-Up</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="followupId"
                    value={formData.followupId}
                    readOnly
                />
                <input
                    type="text"
                    name="enquiryId"
                    value={formData.enquiryId}
                    readOnly
                />
                <input
                    type="text"
                    name="followupMsg"
                    value={formData.followupMsg}
                    onChange={handleChange}
                />
                {/* Add other fields as necessary */}
                <button type="submit">Update Follow-Up</button>
                <button type="button" onClick={onRequestClose}>Close</button>
            </form>
        </Modal>
    );
};

export default UpdateModal;
