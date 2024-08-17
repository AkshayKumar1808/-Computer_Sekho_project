
// import React, { useState } from 'react';

// function FollowUpUpdateForm({ updateFollowup }) {
//   const [FollowupUpdate, setFollowUpDate] = useState({
//     followupId: null,
//     enquiry: {
//       enquiryId: null,
//     },
//     staff: {
//       staffid: null,
//     },
//     followupDate: "",
//     followupMsg: "",
//     isActive: true,
//   });

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     setFollowUpDate((prevState) => ({
//       ...prevState,
//       [name]: type === 'checkbox'
//         ? checked
//         : name === 'followupId'
//         ? Number(value)
//         : value,
//     }));
//   };

//   const handleEnquiryChange = (e) => {
//     const { value } = e.target;

//     setFollowUpDate((prevState) => ({
//       ...prevState,
//       enquiry: {
//         ...prevState.enquiry,
//         enquiryId: Number(value),
//       },
//     }));
//   };

//   const handleStaffChange = (e) => {
//     const { value } = e.target;

//     setFollowUpDate((prevState) => ({
//       ...prevState,
//       staff: {
//         ...prevState.staff,
//         staffid: Number(value),
//       },
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     updateFollowup(FollowupUpdate);
//     setFollowUpDate({
//       followupId: null,
//       enquiry: {
//         enquiryId: null,
//       },
//       staff: {
//         staffid: null,
//       },
//       followupDate: "",
//       followupMsg: "",
//       isActive: true,
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="followupId">Follow-Up ID:</label>
//         <input
//           type="number"
//           id="followupId"
//           name="followupId"
//           value={FollowupUpdate.followupId || ""}
//           onChange={handleInputChange}
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="enquiryId">Enquiry ID:</label>
//         <input
//           type="number"
//           id="enquiryId"
//           name="enquiryId"
//           value={FollowupUpdate.enquiry.enquiryId || ""}
//           onChange={handleEnquiryChange}
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="staffid">Staff ID:</label>
//         <input
//           type="number"
//           id="staffid"
//           name="staffid"
//           value={FollowupUpdate.staff.staffid || ""}
//           onChange={handleStaffChange}
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="followupDate">Follow-Up Date:</label>
//         <input
//           type="date"
//           id="followupDate"
//           name="followupDate"
//           value={FollowupUpdate.followupDate || ""}
//           onChange={handleInputChange}
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="followupMsg">Follow-Up Message:</label>
//         <input
//           type="text"
//           id="followupMsg"
//           name="followupMsg"
//           value={FollowupUpdate.followupMsg || ""}
//           onChange={handleInputChange}
//           required
//         />
//       </div>

//       <div>
//         <label>
//           <input
//             type="checkbox"
//             name="isActive"
//             checked={FollowupUpdate.isActive}
//             onChange={handleInputChange}
//           />
//           Is Active
//         </label>
//       </div>

//       <button type="submit">Update Follow-Up</button>
//     </form>
//   );
// }

// export default FollowUpUpdateForm;




















// // import React, { useState, useEffect } from 'react';

// // function FollowUpUpdateForm({FollowUpUpdateForm}){
    
    
// //     const [FollowupUpdate,setFollowUpDate]=useState({
// //     followupId : null,
// //     enquiry: {
// //         enquiryId: null
// //     },
// //     staff: {
// //         staffid: null
// //     },
// //     followupDate: "",
// //     followupMsg: "",
// //     isActive: true
// //     })

// //     const handleInputChange = (e) => {
// //         const { name, value, type, checked } = e.target;

// //         setFollowUpDate(prevState => ({
// //             ...prevState,
// //             [name]: type === 'checkbox'
// //                 ? checked
// //                 : (name === 'followupId')
// //                 ? Number(value)
// //                 : value
// //         }));
// //     };

// //     const handleEnquiryChange = (e) => {
// //         const { value } = e.target;

// //         setFollowUpDate(prevState => ({
// //             ...prevState,
// //             course: {
// //                 ...prevState.course,
// //                 enquiryId: Number(value)
// //             }
// //         }));
// //     };

// //     const handleStaffChange = (e) => {
// //         const { value } = e.target;

// //         setFollowUpDate(prevState => ({
// //             ...prevState,
// //             staff: {
// //                 ...prevState.staff,
// //                 staffid: Number(value)
// //             }
// //         }));
// //     };
// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         FollowUpUpdateForm(FollowupUpdate);
// //         setFollowUpDate({
// //         followupId : null,
// //         enquiry: {
// //             enquiryId: null
// //         },
// //         staff: {
// //             staffid: null
// //         },
// //         followupDate: "",
// //         followupMsg: "",
// //         isActive: true
// //             }

// //         );
// //     };

// //     return(
// //         <form onSubmit={handleSubmit}>
            

// //         </form>
// //     );


// // }

// // export default FollowUpUpdateForm;



import React, { useState, useEffect } from 'react';

function FollowUpUpdateForm({ followup, updateFollowup, onClose }) {
  const [formState, setFormState] = useState(followup || {
    followupId: null,
    enquiry: { enquiryId: null },
    staff: { staffid: null },
    followupDate: "",
    followupMsg: "",
    isActive: true,
  });

  const [reasonState, setReasonState] = useState({
    followUpReason: "",
    otherReason: "",
  });

  useEffect(() => {
    setFormState(followup || {
      followupId: null,
      enquiry: { enquiryId: null },
      staff: { staffid: null },
      followupDate: "",
      followupMsg: "",
      isActive: true,
    });

    setReasonState({
      followUpReason: followup ? followup.followUpReason || "" : "",
      otherReason: followup ? followup.otherReason || "" : "",
    });
  }, [followup]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleEnquiryChange = (e) => {
    const { value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      enquiry: {
        ...prevState.enquiry,
        enquiryId: Number(value),
      },
    }));
  };

  const handleStaffChange = (e) => {
    const { value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      staff: {
        ...prevState.staff,
        staffid: Number(value),
      },
    }));
  };

  const handleMsgChange = (e) => {
    const { value } = e.target;
    const words = value.trim().split(/\s+/);
    if (words.length <= 100) {
      setFormState((prevState) => ({
        ...prevState,
        followupMsg: value,
      }));
    }
  };

  const handleFollowUpReasonChange = (e) => {
    const { value } = e.target;
    setReasonState((prevState) => ({
      ...prevState,
      followUpReason: value,
    }));
  };

  const handleOtherReasonChange = (e) => {
    const { value } = e.target;
    setReasonState((prevState) => ({
      ...prevState,
      otherReason: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFollowup({ ...formState, ...reasonState });
    onClose(); // Close modal after update
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '400px' }}>
      <div>
        <label htmlFor="followupId">Follow-Up ID:</label>
        <input
          type="number"
          id="followupId"
          name="followupId"
          value={formState.followupId || ""}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label htmlFor="enquiryId">Enquiry ID:</label>
        <input
          type="number"
          id="enquiryId"
          name="enquiryId"
          value={formState.enquiry.enquiryId || ""}
          onChange={handleEnquiryChange}
          required
        />
      </div>

      <div>
        <label htmlFor="staffid">Staff ID:</label>
        <input
          type="number"
          id="staffid"
          name="staffid"
          value={formState.staff.staffid || ""}
          onChange={handleStaffChange}
          required
        />
      </div>

      <div>
        <label htmlFor="followupDate">Follow-Up Date:</label>
        <input
          type="date"
          id="followupDate"
          name="followupDate"
          value={formState.followupDate || ""}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label htmlFor="followupMsg">Follow-Up Message:</label>
        <textarea
          id="followupMsg"
          name="followupMsg"
          value={formState.followupMsg || ""}
          onChange={handleMsgChange}
          rows="4"
          placeholder="Enter up to 100 words..."
          required
          style={{ width: '100%' }}
        />
        <p>{formState.followupMsg.split(/\s+/).length} / 100 words</p>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="isActive"
            checked={formState.isActive}
            onChange={handleInputChange}
          />
          Is Active
        </label>
      </div>

      {!formState.isActive && (
        <div>
          <label htmlFor="followUpReason">Follow-Up Reason:</label>
          <select
            id="followUpReason"
            name="followUpReason"
            value={reasonState.followUpReason}
            onChange={handleFollowUpReasonChange}
            required
          >
            <option value="">Select a reason</option>
            <option value="success">Success</option>
            <option value="not_interested">Not Interested</option>
            <option value="others">Others</option>
          </select>

          {reasonState.followUpReason === 'others' && (
            <div>
              <label htmlFor="otherReason">Other Reason:</label>
              <textarea
                id="otherReason"
                name="otherReason"
                value={reasonState.otherReason || ""}
                onChange={handleOtherReasonChange}
                rows="4"
                placeholder="Please specify..."
                style={{ width: '100%' }}
              />
            </div>
          )}
        </div>
      )}

      <div style={{ marginTop: '10px' }}>
        <button type="submit">Update Follow-Up</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </div>
    </form>
  );
}

export default FollowUpUpdateForm;
