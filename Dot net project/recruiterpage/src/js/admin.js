
import React, { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../css/admin.css';
import TempTable from './components/tempTable/tempTable';

function Admin() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [staffName,setStaffName]=useState();
  const [TempEnq,setTempEnq]=useState([]);
  const [isvisible,setisvisible]=useState(true);

  useEffect(()=>{
    fetchTemp();
  },[]);

  const fetchTemp = async () => {
    const url = `http://localhost:5120/api/getTempEnq`; // Updated endpoint
    try {
        const response = await fetch(url);
        const data = await response.json();
        setTempEnq(data);
    } catch (error) {
        console.error('Error fetching enquiry:', error);
    }
};

const deleteTemp = async (EnqId) => {
  const url = `http://localhost:5120/api/DeleteEnqById/${EnqId}`;
 // const token = localStorage.getItem('jwt1');
  
    const response = await fetch(url, {
      method: 'DELETE',
      
    });
  };

  const handleAddClick = () => {
    // Additional logic for Add Enquiry if needed
    setisvisible(false)
  };
  const handleClick = () => {
    // Additional logic for Add Enquiry if needed
    setisvisible(true)
  };

  const toggleDropdown = () => {
    setisvisible(false);
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
        <Link to="/admin/" className="nav-button" onClick={handleClick}>
          
          Home
        </Link>
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
              <Link to="/admin/StudentList" onClick={toggleDropdown}>Student</Link>
              <Link to="/admin/announcement" onClick={toggleDropdown}>Announcement</Link>
              <Link to="/admin/enquirytable" onClick={toggleDropdown}>Enquiry</Link>
              <Link to="/admin/staff" onClick={toggleDropdown}>Staff</Link>
            </div>
          )}
          <Link to="/admin/followup" className="nav-button"onClick={handleAddClick}>
          
            Follow-Up
          </Link>
          <Link to="/admin/Regis" className="nav-button" onClick={handleAddClick}>
          
            Registration
          </Link>
        </div>
        <div className="welcome">
           <span className="staff-name">Welcome</span>
        </div>
      </header>
    
          
      {!isvisible ?<Outlet />:<div>
        <br/>
        <h2>Today's online enquiries</h2>
        <TempTable  TempEnq={TempEnq} deleteTemp={deleteTemp}/>
        </div>}
      
      
    </div>
   
  );
}

export default Admin;
