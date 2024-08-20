import React, { useState, useEffect } from 'react';
import useAuth from './useAuth';
import AdminEnquiryTable from './AdminEnquiryTable';

const AdminEnquiry = () => {
    const [enquiries, setEnquiries] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editing, setEditing] = useState(false);
    const [currentEnquiry, setCurrentEnquiry] = useState(null);
    const { fetchData } = useAuth();
    const [courses, setCourses] = useState([]);
    const [staff, setStaff] = useState([]);

    useEffect(() => {
        fetchEnquiries();
        fetchCourses();
        fetchStaff();
    }, [enquiries]);

    const fetchEnquiries = async () => {
        const url = 'http://localhost:5210/api/pta/getEn/Detail';
        try {
            const response = await fetch(url);
            const data = await response.json();
            setEnquiries(data);
        } catch (error) {
            console.error('Error fetching enquiries:', error);
        }
    };
    
    const fetchCourses = async () => {
        const url = 'http://localhost:5210/api/pta/getallcourse/course';
        try {
            const response = await fetch(url);
            const data = await response.json();
            setCourses(data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };
    
    const fetchStaff = async () => {
        const url = 'http://localhost:5210/api/pta/getstaff';
        try {
            const response = await fetch(url);
            const data = await response.json();
            setStaff(data);
        } catch (error) {
            console.error('Error fetching staff:', error);
        }
    };
    
    const updateEnquiry = async (id, updatedEnquiry) => {
        const url = `http://localhost:5210/api/admin/up/${id}`;
        try {
            await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedEnquiry),
            });
            fetchEnquiries();
            setEditing(false);
            setShowForm(false);
        } catch (error) {
            console.error('Error updating enquiry:', error);
        }
    };
    
    const updateEnquiryStatus = async (id, isActive) => {
        const updatedEnquiry = enquiries.find(enquiry => enquiry.enquiryId === id);
        if (updatedEnquiry) {
            updatedEnquiry.isActive = isActive;
            await updateEnquiry(id, updatedEnquiry);
        }
    };
    
    const deleteEnquiry = async (id) => {
        const url = `http://localhost:5210/api/admin/del/${id}`;
        try {
            await fetch(url, {
                method: 'DELETE',
            });
            fetchEnquiries();
        } catch (error) {
            console.error('Error deleting enquiry:', error);
        }
    };
    




    /*const deleteEnquiry = async (id) => { 
        fetch(`http://localhost:8080/api/pta/del/${id}`,{
            method:'DELETE',
            headers: {  
                'Authorization':`Bearer ${sessionStorage.getItem('jwt1')}`
            },
           
        }).then(res => res)
        .then((result) => {
        console.log(result)
        }); 
        fetchEnquiries();
        //navigate('/admin/enquirytable');
        
        
    };
    const editEnquiry = (enquiry) => {
        setCurrentEnquiry(enquiry);
        setEditing(true);
        setShowForm(true);
    };*/

    const handleclik=()=>{
        const jwt=sessionStorage.getItem('jwt1');
        console.log(jwt);
    };

    return (
        <div>
            <h1>Admin Enquiries</h1>
           <button onClick={handleclik}>jwt</button>
            <AdminEnquiryTable
                enquiries={enquiries}
                updateEnquiryStatus={updateEnquiryStatus}
                deleteEnquiry={deleteEnquiry}
            />
        </div>
    );
};

export default AdminEnquiry;
