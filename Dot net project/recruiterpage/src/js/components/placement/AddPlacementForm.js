// import React, { useState } from 'react';

// const AddPlacementForm = ({ onAdd, onCancel }) => {
//     const [placement, setPlacement] = useState({
//         studentId: "",
//         courseId: "",
//         batchId: "",
//         duration: "",
//         companyName: "",
//     });

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         await onAdd(placement);
//         setPlacement({
//             studentId: "",
//             courseId: "",
//             batchId: "",
//             duration: "",
//             companyName: "",
//         });
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setPlacement({
//             ...placement,
//             [name]: value,
//         });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Student ID:</label>
//                 <input
//                     type="number"
//                     name="studentId"
//                     value={placement.studentId}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Course ID:</label>
//                 <input
//                     type="number"
//                     name="courseId"
//                     value={placement.courseId}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Batch ID:</label>
//                 <input
//                     type="number"
//                     name="batchId"
//                     value={placement.batchId}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Duration:</label>
//                 <input
//                     type="text"
//                     name="duration"
//                     value={placement.duration}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Company Name:</label>
//                 <input
//                     type="text"
//                     name="companyName"
//                     value={placement.companyName}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <button type="submit">Add Placement</button>
//             <button type="button" onClick={onCancel}>Cancel</button>
//         </form>
//     );
// };

// export default AddPlacementForm;
