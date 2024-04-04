import React, {useMemo, useState} from 'react';
import './Registration.css';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { UseForm } from '../../hooks/UseForm/UseForm';
import { register } from '../../utils/usersApi/usersApi';
import RegistrationPopup from '../Popups/RegistrationPopup';

function Registration() {
  const {values, errors, formIsValid, setValues, setErrors, handleChange, checkValidity} = UseForm();
  const [openPopup, setIsOpen] = useState(false);
  const [serverMessage, setServerMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleRegistration(event:any){
    event.preventDefault();
    try{
      setIsLoading(true);
      setIsOpen(true);
      const response = await register(values);
      if(response.ok){
        setServerMessage('Пользователь успешно зарегистрирован, введите логин и пароль для входа');
      }
      else {
        throw new Error(response)
      }
    }
    catch(err:any) {
      setServerMessage(err.message);
      setIsOpen(true);
    }
    finally {
      setIsLoading(false);
    }
  }


  return (
    <section className="registration">
      <form
      onBlur={checkValidity}
      onChange={checkValidity}
      onSubmit={handleRegistration}
      noValidate
      >
        <fieldset className="registration__form" disabled={isLoading}>
          <input
            className="registration__input"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required={true}
            type='email'
            autoComplete='current-password'
          ></input>
          <p className="registration__input-error">{errors.email}</p>
          <input
            className="registration__input"
            placeholder="Пароль"
            name="password"
            type='password'
            autoComplete='current-password'
            value={values.password}
            onChange={handleChange}
            required={true}
            minLength={6}
            maxLength={20}
          ></input>
          <p className="registration__input-error">{errors.password}</p>
          <input
            className="registration__input"
            placeholder="Имя"
            name="name"
            value={values.name}
            onChange={handleChange}
            required={true}
          ></input>
          <p className="registration__input-error">{errors.name}</p>
          <input
            className="registration__input"
            placeholder="Фамилия"
            name="surname"
            value={values.surname}
            onChange={handleChange}
            required={true}
          ></input>
          <p className="registration__input-error">{errors.surname}</p>
          <button
          className="registration__submit-button"
          type='submit'
          disabled={!formIsValid}
          >Зарегистрироваться</button>
        </fieldset>
      </form>
      <RegistrationPopup
      message={serverMessage}
      isOpen={openPopup}
      setIsOpen={setIsOpen}
      isLoading={isLoading}/>
    </section>
  );
}

export default Registration;
