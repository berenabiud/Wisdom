// src/components/Popup.tsx
import React from 'react';
import { usePopup } from './PopupContext';
import { useNavigate } from 'react-router-dom';
import './Popup.css'; // We'll create this next

export const Popup: React.FC = () => {
  const { popupType, closePopup } = usePopup();
  const navigate = useNavigate();

  if (popupType !== 'modal') return null;

  const handleBookNow = () => {
    closePopup();
    navigate('/book');
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Interested in our Services?</h2>
        <p>Book a demo or schedule a visit with us today!</p>
        <div className="popup-buttons">
          <button onClick={handleBookNow}>Book Now</button>
          <button onClick={closePopup}>Maybe Later</button>
        </div>
      </div>
    </div>
  );
};
