// import React, { useState, useEffect } from 'react';
// import useAuth from './useAuth';
// import  FollowUpUpdateForm from './FollowupUpdateform';
// import Followupform from './Followupform';
// import '../css/followup.css';
// import FollowUpTable from './FollowupTable';

// function Followup() {
//   const [followups, setFollowups] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [showUpdateForm,setShowUpdateForm]=useState(false);
//   const { fetchData } = useAuth();

//   useEffect(() => {
//     fetchFollowup();
// }, []);

// const fetchFollowup=async()=>{
//   const url='http://localhost:8080/api/pta/followup';
//   try{
//     const followups=await fetchData(url);
//     setFollowups(followups);
    
//   }catch(error){
//     console.error(error);
//   }
// };

// // const addfollowup=async(followup)=>{
// //   const url='http://localhost:8080/api/admin/addfollowup';
// //   try{
// //     await fetchData(url,{
// //       method:'POST',
// //       headers:{
// //         'Content-Type':'application/json',
// //       },
// //       body:JSON.stringify(followup),

// //     });
// //     fetchFollowup();
// //     setShowForm(false);
// //   }catch(error){
// //     console.error(error);
// //   }
// // };
// const addfollowup = async (followup) => {
//   const url = 'http://localhost:8080/api/admin/addfollowup';
//   const token=localStorage.getItem('jwt1');
//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${token}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(followup),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     // Fetch updated follow-ups after adding the new one
//     fetchFollowup();
//     setShowForm(false);
//   } catch (error) {
//     console.error('Error adding follow-up:', error);
//   }
// };

// // const updateFollowup = async (followup) => {
// //   const url = `http://localhost:8080/api/admin/updatefollowup/${followup.followupId}`;
// //   try {
// //     await fetchData(url, {
// //       method: 'PUT',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify(followup),
// //     });
// //     fetchFollowup();
// //     setShowForm(false);
// //   } catch (error) {
// //     console.error(error);
// //   }
// // };

// const updateFollowup = async (followup) => {
//   const url = `http://localhost:8080/api/admin/updatefollowup/${followup.followupId}`;
//   const token=localStorage.getItem('jwt1');
//   console.log()
//   try {
//     const response = await fetch(url, {
//       method: 'PUT',
//       headers: {
//         'Authorization': `Bearer ${token}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(followup),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     // Fetch updated follow-ups after adding the new one
//     fetchFollowup();
//     setShowForm(false);
//   } catch (error) {
//     console.error('Error adding follow-up:', error);
//   }
// };






//   return (
//     <div>
//       <h2>Follow-Up Page</h2>
//       <button
//       className="button-spacing"  
//       onClick={() => setShowForm(!showForm)}>
//                 {showForm ? 'Hide add Form' : 'Show add Form'}
//             </button>
            
//       <button onClick={()=>setShowUpdateForm(!showUpdateForm)}>
//         {showUpdateForm ? 'Hide update Form' : 'Show update Form'}
//       </button>
      
//             {showUpdateForm &&< FollowUpUpdateForm updateFollowup ={updateFollowup}/>}
//             {showForm && <Followupform addfollowup={addfollowup} />}
            
//             <FollowUpTable FollowUps={followups} />
//      </div>
//   );
// }

// export default Followup;



import React, { useState, useEffect } from 'react';
import useAuth from '../useAuth';
import FollowUpUpdateForm from './FollowupUpdateform';
import FollowupForm from './Followupform';
import FollowUpTable from './FollowupTable';
import Modal from './Model';
import '../css/followup.css';

function Followup() {
  const [followups, setFollowups] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedFollowup, setSelectedFollowup] = useState(null);
  const { fetchData } = useAuth();

  useEffect(() => {
    fetchFollowup();
  }, []);

  const fetchFollowup = async () => {
    const url = 'http://localhost:8080/api/pta/followup';
    try {
      const followups = await fetchData(url);
      setFollowups(followups);
    } catch (error) {
      console.error(error);
    }
  };

  const addfollowup = async (followup) => {
    const url = 'http://localhost:8080/api/admin/addfollowup';
    const token = localStorage.getItem('jwt1');
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(followup),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      fetchFollowup();
      setShowForm(false);
    } catch (error) {
      console.error('Error adding follow-up:', error);
    }
  };

  const updateFollowup = async (followup) => {
    const url = `http://localhost:8080/api/admin/updatefollowup/${followup.followupId}`;
    const token = localStorage.getItem('jwt1');
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(followup),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      fetchFollowup();
      setShowUpdateForm(false);
    } catch (error) {
      console.error('Error updating follow-up:', error);
    }
  };

  const deleteFollowup = async (followupId) => {
    const url = `http://localhost:8080/api/admin/delfollowup/${followupId}`;
    const token = localStorage.getItem('jwt1');
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      fetchFollowup();
    } catch (error) {
      console.error('Error deleting follow-up:', error);
    }
  };

  const handleEditClick = (followup) => {
    setSelectedFollowup(followup);
    setShowUpdateForm(true);
  };

  const closeUpdateForm = () => {
    setShowUpdateForm(false);
    setSelectedFollowup(null);
  };

  return (
    <div>
      <h2>Follow-Up Page</h2>
      <button className="button-spacing" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Add Form' : 'Show Add Form'}
      </button>

      <button onClick={() => setShowUpdateForm(!showUpdateForm)}>
        {showUpdateForm ? 'Hide Update Form' : 'Show Update Form'}
      </button>

      {showForm && <FollowupForm addfollowup={addfollowup} />}

      {showUpdateForm && (
        <Modal onClose={closeUpdateForm}>
          <FollowUpUpdateForm
            followup={selectedFollowup}
            updateFollowup={updateFollowup}
            onClose={closeUpdateForm}
          />
        </Modal>
      )}

      <FollowUpTable
        followups={followups}
        onEdit={handleEditClick}
        onDelete={deleteFollowup}
      />
    </div>
  );
}

export default Followup;
