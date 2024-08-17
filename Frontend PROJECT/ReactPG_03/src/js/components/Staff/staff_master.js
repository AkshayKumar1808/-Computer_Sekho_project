// import React, { useState, useEffect } from 'react';
// import useAuth from './useAuth';
// import staffTable from './staffTable';
// import AddstaffForm from './AddstaffForm';

// export default function staff() {
//     const [staffs, setstaffs] = useState([]);
//     const [showForm, setShowForm] = useState(false);
//     const { fetchData } = useAuth();

//     const fetchstaff = async () => {
//         const url = '/api/pta/getannoucement'; // Replace with your actual endpoint
//         try {
//             const response = await fetchData(url);
//             setstaffs(response);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     const addstaff = async (newstaff) => {
//         const url = '/api/admin/postannoucement'; // Replace with your actual endpoint
//         try {
//             await fetchData(url, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(newstaff),
//             });
//             fetchstaff();
//             setShowForm(false);
//         } catch (error) {
//             console.error('Error adding staff:', error);
//         }
//     };

//     const updatestaff = async (id, updatedstaff) => {
//         const url = `/api/admin/putannoucement/${id}`; // Replace with your actual endpoint
//         try {
//             await fetchData(url, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(updatedstaff),
//             });
//             fetchstaff();
//         } catch (error) {
//             console.error('Error updating staff:', error);
//         }
//     };

//     const updatestaffStatus = async (id, isActive) => {
//         const updatedstaff = staffs.find(
//             staff => staff.staffId === id
//         );
//         if (updatedstaff) {
//             updatedstaff.isActive = isActive;
//             await updatestaff(id, updatedstaff);
//         }
//     };

//     const deletestaff = async (id) => {
//         const url = `/api/admin/delannoucement/${id}`; // Replace with your actual endpoint
//         try {
//             await fetchData(url, {
//                 method: 'DELETE',
//             });
//             fetchstaff();
//         } catch (error) {
//             console.error('Error deleting staff:', error);
//         }
//     };

//     useEffect(() => {
//         fetchstaff();
//     }, []);

//     return (
//         <div>
//             <h2>staffs</h2>
//             <button onClick={() => setShowForm(!showForm)}>
//                 {showForm ? 'Cancel' : 'Add staff'}
//             </button>
//             {showForm && <AddstaffForm onAdd={addstaff} onCancel={() => setShowForm(false)} />}
//             <staffTable
//                 staffs={staffs}
//                 onUpdateStatus={updatestaffStatus}
//                 onDelete={deletestaff}
//             />
//         </div>
//     );
// }
