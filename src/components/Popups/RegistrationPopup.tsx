import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './RegistrationPopup.css';
import Loader from '../UI/Spinner/Loader';

interface RegistrationPopupProps {
  message: string;
  isOpen: boolean;
  setIsOpen: (data: boolean) => void;
  isLoading: boolean;
}

function RegistrationPopup({ message, isOpen, setIsOpen, isLoading }: RegistrationPopupProps) {

  const isPopupOpen = isOpen ? 'registration-popup_open' : '';
  const isPopupContentOpen = isOpen ? 'registration-popup__content_open' : '';

  function popupClose(event:any) {
    event.stopPropagation();
    setIsOpen(false);
  }

  return (
    <div className={`registration-popup ${isPopupOpen}`}>
      <div className={'registration-popup__overlay'} onClick={popupClose}></div>
      <div className={`registration-popup__content ${isPopupContentOpen}`}>
        <button className="registration-popup__close-button" onClick={popupClose}>✖</button>
        { isLoading ? <Loader />
        : <p className="registration-popup__message">{message}</p> }
      </div>
    </div>

  );
}

export default RegistrationPopup;
 