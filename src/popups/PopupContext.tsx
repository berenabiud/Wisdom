

// // src/context/PopupContext.tsx
// import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// type PopupType = 'modal' | null;

// interface PopupContextType {
//   popupType: PopupType;
//   showPopup: (type: PopupType) => void;
//   closePopup: () => void;
// }

// const PopupContext = createContext<PopupContextType | undefined>(undefined);

// interface PopupProviderProps {
//   children: ReactNode;
// }

// export const PopupProvider: React.FC<PopupProviderProps> = ({ children }) => {
//   const [popupType, setPopupType] = useState<PopupType>(null);

//   useEffect(() => {
//     // Automatically show popup on first load
//     setTimeout(() => setPopupType('modal'), 2000); // 2-second delay
//   }, []);

//   const showPopup = (type: PopupType) => setPopupType(type);
//   const closePopup = () => setPopupType(null);

//   return (
//     <PopupContext.Provider value={{ popupType, showPopup, closePopup }}>
//       {children}
//     </PopupContext.Provider>
//   );
// };

// export const usePopup = (): PopupContextType => {
//   const context = useContext(PopupContext);
//   if (!context) throw new Error('usePopup must be used within PopupProvider');
//   return context;
// };

// src/context/PopupContext.tsx
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type PopupType = 'modal' | null;

interface PopupContextType {
  popupType: PopupType;
  showPopup: (type: PopupType) => void;
  closePopup: () => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

interface PopupProviderProps {
  children: ReactNode;
}

export const PopupProvider: React.FC<PopupProviderProps> = ({ children }) => {
  const [popupType, setPopupType] = useState<PopupType>(null);

  useEffect(() => {
    // Automatically show popup on first load
    setTimeout(() => setPopupType('modal'), 2000); // 2-second delay
  }, []);

  const showPopup = (type: PopupType) => setPopupType(type);
  const closePopup = () => setPopupType(null);

  return (
    <PopupContext.Provider value={{ popupType, showPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = (): PopupContextType => {
  const context = useContext(PopupContext);
  if (!context) throw new Error('usePopup must be used within PopupProvider');
  return context;
};
