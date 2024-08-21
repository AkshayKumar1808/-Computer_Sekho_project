import React from 'react';
import '../../css/umarCard.css'; // Import the CSS file for styling

function Maps() {
  return (
    <div className="Mcard">
      <div className="Mcard-content">
        <h2 className="Mcard-title">Location Map</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.908352363284!2d72.83031607502845!3d19.111676082100285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c3a5e26d7b%3A0x89a89f343cff9c29!2sSM%20VITA!5e0!3m2!1sen!2sin!4v1722253973211!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Maps;
