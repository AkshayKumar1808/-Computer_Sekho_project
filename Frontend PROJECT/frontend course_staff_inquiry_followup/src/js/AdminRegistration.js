// import React, { useState } from 'react';
// import '../css/Reg.css';

// function Reg() {
//   const [name, setName] = useState('');
//   const [dateOfBirth, setDateOfBirth] = useState('');
//   const [gender, setGender] = useState('');
//   const [resAddress, setResAddress] = useState('');
//   const [officeAddress, setOfficeAddress] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const [educationalQualification, setEducationalQualification] = useState('');
//   const [courseEnrolled, setCourseEnrolled] = useState('');
//   const [startingFrom, setStartingFrom] = useState('');
//   const [paymentMode, setPaymentMode] = useState('');
//   const [paymentAmount, setPaymentAmount] = useState('');
//   const [bankName, setBankName] = useState('');
//   const [bankDate, setBankDate] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//     if (!validateForm()) {
//       return;
//     }

//     console.log({
//       name,
//       dateOfBirth,
//       gender,
//       resAddress,
//       officeAddress,
//       phone,
//       email,
//       educationalQualification,
//       courseEnrolled,
//       startingFrom,
//       paymentMode,
//       paymentAmount,
//       bankName,
//       bankDate,
//     });
//   };

//   const validateForm = () => {
//     const phonePattern = /^[0-9]{10}$/;
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!phonePattern.test(phone)) {
//       alert('Please enter a valid 10-digit phone number.');
//       return false;
//     }

//     if (!emailPattern.test(email)) {
//       alert('Please enter a valid email address.');
//       return false;
//     }

//     if (parseFloat(paymentAmount) <= 0) {
//       alert('Payment amount must be a positive number.');
//       return false;
//     }

//     if (paymentMode !== 'cash' && (!bankName || !bankDate)) {
//       alert('Please provide bank name and bank date for non-cash payments.');
//       return false;
//     }

//     return true;
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Registration Form</h2>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="dateOfBirth">Date of Birth:</label>
//         <input
//           type="date"
//           id="dateOfBirth"
//           value={dateOfBirth}
//           onChange={(e) => setDateOfBirth(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="gender">Gender:</label>
//         <select
//           id="gender"
//           value={gender}
//           onChange={(e) => setGender(e.target.value)}
//           required
//         >
//           <option value="">Select Gender</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="resAddress">Residential Address:</label>
//         <textarea
//           id="resAddress"
//           value={resAddress}
//           onChange={(e) => setResAddress(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="officeAddress">Office Address:</label>
//         <textarea
//           id="officeAddress"
//           value={officeAddress}
//           onChange={(e) => setOfficeAddress(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="phone">Phone:</label>
//         <input
//           type="tel"
//           id="phone"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           pattern="[0-9]{10}"
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="educationalQualification">
//           Educational Qualification:
//         </label>
//         <input
//           type="text"
//           id="educationalQualification"
//           value={educationalQualification}
//           onChange={(e) => setEducationalQualification(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="courseEnrolled">Course Enrolled For:</label>
//         <input
//           type="text"
//           id="courseEnrolled"
//           value={courseEnrolled}
//           onChange={(e) => setCourseEnrolled(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="startingFrom">Starting From:</label>
//         <input
//           type="date"
//           id="startingFrom"
//           value={startingFrom}
//           onChange={(e) => setStartingFrom(e.target.value)}
//           required
//         />
//       </div>
//       <h3>Payment Details</h3>
//       <div>
//         <label htmlFor="paymentMode">Payment Mode:</label>
//         <select
//           id="paymentMode"
//           value={paymentMode}
//           onChange={(e) => setPaymentMode(e.target.value)}
//           required
//         >
//           <option value="">Select Payment Mode</option>
//           <option value="cash">Cash</option>
//           <option value="cheque">Cheque</option>
//           <option value="online">Online</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="paymentAmount">Payment Amount:</label>
//         <input
//           type="number"
//           id="paymentAmount"
//           value={paymentAmount}
//           onChange={(e) => setPaymentAmount(e.target.value)}
//           min="1"
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="bankName">Bank Name:</label>
//         <input
//           type="text"
//           id="bankName"
//           value={bankName}
//           onChange={(e) => setBankName(e.target.value)}
//           disabled={paymentMode === 'cash'}
//           required={paymentMode !== 'cash'}
//         />
//       </div>
//       <div>
//         <label htmlFor="bankDate">Bank Date:</label>
//         <input
//           type="date"
//           id="bankDate"
//           value={bankDate}
//           onChange={(e) => setBankDate(e.target.value)}
//           disabled={paymentMode === 'cash'}
//           required={paymentMode !== 'cash'}
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Reg;
