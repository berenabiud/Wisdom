// import React, { useState, useEffect } from 'react';
// import { usePopup } from './PopupContext'; // Import usePopup hook
// import './popup.css';

// const PopupComponent: React.FC = () => {
//   const { popupType, closePopup } = usePopup();
//   const [popupPosition, setPopupPosition] = useState<{ top: string; left: string }>({ top: '20%', left: '50%' });

//   useEffect(() => {
//     // You can make popup appear dynamically by calculating the position here
//     const randomTop = Math.random() * 80; // Random top position between 0 and 80%
//     const randomLeft = Math.random() * 90; // Random left position between 0 and 90%

//     setPopupPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
//   }, [popupType]); // Re-run when popupType changes

//   const renderPopup = () => {
//     switch (popupType) {
//       case 'modal':
//         return (
//           <div className="popup-modal">
//             <div className="popup-container" style={{ top: popupPosition.top, left: popupPosition.left }}>
//               <div className="popup-content">
//                 <h2>Book a Demo!</h2>
//                 <p>Click below to book a demo or make a visit.</p>
//                 <a href="/book" className="popup-button">Book Now</a>
//                 <button className="popup-close" onClick={closePopup}>X</button>
//               </div>
//             </div>
//           </div>
//         );
//       case 'banner':
//         return (
//           <div className="popup-banner">
//             <span>Book a Demo Today!</span>
//             <a href="/book" className="popup-button">Book Now</a>
//             <button className="popup-close" onClick={closePopup}>X</button>
//           </div>
//         );
//       case 'toast':
//         return (
//           <div className="popup-toast">
//             <span>Book a Demo or Visit!</span>
//             <a href="/book" className="popup-button">Book Now</a>
//             <button className="popup-close" onClick={closePopup}>X</button>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return renderPopup();
// };

// export default PopupComponent;
