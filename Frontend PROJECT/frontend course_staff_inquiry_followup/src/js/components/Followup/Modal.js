import React from 'react';
import './Model.css';

function Modal({ children, onClose }) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );
}

export default Modal;
