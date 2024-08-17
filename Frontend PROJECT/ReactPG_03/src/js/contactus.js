import React from 'react';
import Maps from './components/maps';
import '../css/ContactUs.css'; // Import the CSS file for styling
import Header from './components/Header';
import EnquiryCard from './components/enquiryCard';
import Footer from './components/Footer';

function ContactUs() {
  return (
    <div>
      <Header />
      <div className="contact-us container">
        <h1 className="contact-title">Contact Us</h1>
        
        <div className="info-sections">
          <div className="origin">
            <h2 className="origin-title">Our Origin</h2>
            <p>We are a part of Upanagar Shikshan Mandal (USM), a pioneering educational trust in the western suburbs of Mumbai. 
              Commencing in 1956, USM has blossomed into 14 educational institutes that impart quality education from primary 
              school to Post-Graduate courses.</p>
          </div>
          
          <div className="contact-details">
            <p><strong>Address:</strong> 123 Main Street, Anytown, USA</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Email:</strong> contact@company.com</p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-6">
            <Maps />
          </div>
          <div className="col-md-6">
            <EnquiryCard />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ContactUs;