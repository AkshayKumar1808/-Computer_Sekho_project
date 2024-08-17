import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './js/Home';
import DAC from './js/DAC';
import DBDA from './js/DBDA';
import MSCIT from './js/MSCIT';
import ContactUs from './js/contactus';
import Login from './js/login';
import Signup from './js/signup';
import Header from './js/components/Header';

import Admin from './js/admin';
import AddEnquiryForm from './js/components/AddEnquiryForm';
import Placement from './js/components/Placement';
import Batch from './js/components/Batch';
import Course from './js/components/Course';
import Reg from './js/components/Reg'
import Announcement from './js/components/Announcement';
import Enquirytable from './js/components/Enquirytable';
import Followup from './js/components/Followup/Followup';
import PrivateRoute from './js/components/PrivateRoute';
import AdminEnquiry from './js/components/AdminEnquiry';




//<Route path="/adminpanel/Reg" element={<Reg/>}/>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 
  <BrowserRouter>
    <Routes>
    
   
      <Route path="/" element={<App />} />
      <Route path="Home" element={<Home />} />
      <Route path="Contactus" element={<ContactUs />} />
      <Route path="Signup" element={<Signup />} />
      <Route path="Login" element={<Login />} />
     
      <Route path="/Services/DAC" element={<DAC/>} />
      <Route path="/Services/DBDA" element={<DBDA/>} />
      <Route path="/Services/MSCIT" element={<MSCIT/>} />
      
      <Route path="/admin" element={<Admin />}>
      <Route path="course" element={<Course />}/>
      <Route path="batch" element={<Batch />} />
      <Route path="placement" element={<Placement />} />
      <Route path="announcement" element={<Announcement />} />
      <Route path="reg" element={<Reg />} />
      <Route path="followup" element={<Followup />} />
      <Route path="enquirytable" element={<AdminEnquiry />} />
      <Route path="enquirytable" element={<AdminEnquiry />} />
      <Route path="addenquiry" element={<AddEnquiryForm />} />
      
      </Route>

        
    </Routes>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/**
 *         <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>}>
      
 */