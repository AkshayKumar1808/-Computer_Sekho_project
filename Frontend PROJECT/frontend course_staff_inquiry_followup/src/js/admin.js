// import React, { useState } from 'react';
// import { Outlet, Link } from 'react-router-dom';
// import '../css/admin.css';

// function Admin() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleAddClick = () => {
//     // Additional logic for Add Enquiry if needed
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen((prev) => !prev); // Toggle dropdown open state
//   };

//   return (
//     <div>
//       <header className="App-header">
//         <div className="header-content">
//           <img src={"/home/logo.png"} alt="Logo" className="logo" />
//           <h1>USM's Shriram Mantri Vidyanidhi Info Tech Academy</h1>
//         </div>
//         <div className="buttons">
//           <Link to="/admin/addenquiry" className="nav-button" onClick={handleAddClick}>
//             Add Enquiry
//           </Link>
//           <button className="nav-button" onClick={toggleDropdown}>
//             Tables
//           </button>
//           {isDropdownOpen && (
//             <div className="dropdown-menu">
//               <Link to="/admin/course" onClick={toggleDropdown}>Course</Link>
//               <Link to="/admin/batch" onClick={toggleDropdown}>Batch</Link>
//               <Link to="/admin/placement" onClick={toggleDropdown}>Placement</Link>
//               <Link to="/admin/announcement" onClick={toggleDropdown}>Announcement</Link>
//               <Link to="/admin/enquirytable" onClick={toggleDropdown}>Enquiry</Link>
//             </div>
//           )}
//           <Link to="/admin/followup" className="nav-button">
//             Follow-Up
//           </Link>
//           <Link to="/admin/reg" className="nav-button">
//             Registration
//           </Link>
//         </div>
//         <div className="welcome">
//           Welcome <span className="staff-name">Staff Name</span>
//         </div>
//       </header>
//       <Outlet />
//     </div>
//   );
// }

// export default Admin;
import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../css/admin.css';

function Admin() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [staffName,setStaffName]=useState()

  const handleAddClick = () => {
    // Additional logic for Add Enquiry if needed
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev); // Toggle dropdown open state
  };

  return (
    <div>
      <header className="App-header">
        <div className="header-content">
          <img src={"/home/logo.png"} alt="Logo" className="logo" />
          <h1>USM's Shriram Mantri Vidyanidhi Info Tech Academy</h1>
        </div>
        <div className="buttons">
          <Link to="/admin/addenquiry" className="nav-button" onClick={handleAddClick}>
            Add Enquiry
          </Link>
          <button className="nav-button" onClick={toggleDropdown}>
            Tables
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/admin/course" onClick={toggleDropdown}>Course</Link>
              <Link to="/admin/batch" onClick={toggleDropdown}>Batch</Link>
              <Link to="/admin/placement" onClick={toggleDropdown}>Placement</Link>
              <Link to="/admin/announcement" onClick={toggleDropdown}>Announcement</Link>
              <Link to="/admin/enquirytable" onClick={toggleDropdown}>Enquiry</Link>
              <Link to="/admin/staff" onClick={toggleDropdown}>Staff</Link>
            </div>
          )}
          <Link to="/admin/followup" className="nav-button">
            Follow-Up
          </Link>
          <Link to="/admin/reg" className="nav-button">
            Registration
          </Link>
        </div>
        <div className="welcome">
          Welcome <span className="staff-name">Staff Name</span>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default Admin;
