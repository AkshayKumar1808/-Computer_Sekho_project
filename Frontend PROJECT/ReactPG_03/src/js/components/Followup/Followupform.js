import React, { useState } from "react";

export default function({addfollowup}){
    const [Followup, setFollowUp] = useState({
        enquiry: {
          enquiryId: null,
        },
        staff: {
          staffid: null,
        },
        followupDate: "",
        followupMsg: "",
        isActive: true,
      });
      const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
    
        setFollowUp((prevState) => ({
          ...prevState,
          [name]: type === 'checkbox'
            ? checked
            : value,
        }));
      };
      const handleEnquiryChange = (e) => {
        const { value } = e.target;
    
        setFollowUp((prevState) => ({
          ...prevState,
          enquiry: {
            ...prevState.enquiry,
            enquiryId: Number(value),
          },
        }));
      };
      const handleStaffChange = (e) => {
        const { value } = e.target;
    
        setFollowUp((prevState) => ({
          ...prevState,
          staff: {
            ...prevState.staff,
            staffid: Number(value),
          },
        }));
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        addfollowup(Followup);
        console.log(Followup);
        setFollowUp({
          enquiry: {
            enquiryId: null,
          },
          staff: {
            staffid: null,
          },
          followupDate: "",
          followupMsg: "",
          isActive: true,
        });
      };

    return( <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="enquiryId">Enquiry ID:</label>
          <input
            type="number"
            id="enquiryId"
            name="enquiryId"
            value={Followup.enquiry.enquiryId || ""}
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
            value={Followup.staff.staffid || ""}
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
            value={Followup.followupDate || ""}
            onChange={handleInputChange}
            required
          />
        </div>
  
        <div className="label-textarea-container">
        <label htmlFor="followupMsg">Follow-Up Message:</label>
        <textarea
            id="followupMsg"
            name="followupMsg"
            value={Followup.followupMsg || ""}
            onChange={handleInputChange}
            required
            rows="4"
            cols="50"
        />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="isActive"
              checked={Followup.isActive}
              onChange={handleInputChange}
            />
            Is Active
          </label>
        </div>
  
        <button type="submit">ADD Follow-Up</button>
      </form>)
}