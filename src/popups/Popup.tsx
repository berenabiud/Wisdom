// src/components/Popup.tsx
import React from 'react';
import { usePopup } from './PopupContext';
import { useNavigate } from 'react-router-dom';

export const Popup: React.FC = () => {
  const { popupType, closePopup } = usePopup();
  const navigate = useNavigate();

  if (popupType !== 'modal') return null;

  const handleBookNow = () => {
    closePopup();
    navigate('/book');
  };

  const popupOverlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  };

  const popupContentStyle: React.CSSProperties = {
    background: 'white',
    padding: '2rem',
    borderRadius: '10px',
    maxWidth: '400px',
    width: '90%',
    textAlign: 'center',
    animation: 'fadeIn 0.3s ease-in-out',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  };

  const popupButtonsStyle: React.CSSProperties = {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '0.8rem 1.5rem',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#5c5ff7',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    fontSize: '1rem',
  };

  const buttonHoverStyle: React.CSSProperties = {
    backgroundColor: '#4a4fe1',
  };

  const buttonSecondaryStyle: React.CSSProperties = {
    backgroundColor: '#aaa',
  };

  const buttonSecondaryHoverStyle: React.CSSProperties = {
    backgroundColor: '#888',
  };

  return (
    <div style={popupOverlayStyle}>
      <div style={popupContentStyle}>
        <h2>Interested in our Services?</h2>
        <p>Book a demo or schedule a visit with us today!</p>
        <div style={popupButtonsStyle}>
          <button
            style={buttonStyle}
            onClick={handleBookNow}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#5c5ff7')}
          >
            Book Now
          </button>
          <button
            style={{ ...buttonStyle, ...buttonSecondaryStyle }}
            onClick={closePopup}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = buttonSecondaryHoverStyle.backgroundColor)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#aaa')}
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
};
