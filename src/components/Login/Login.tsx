import React, {useMemo} from 'react';
import './Login.css';
import { Link, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { UseForm } from '../../hooks/UseForm/UseForm';
import { login } from '../../utils/usersApi/usersApi';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getUser } from '../../app/User/userSlice';

function Login() {

  const {values, errors, formIsValid, setValues, handleChange, checkValidity} = UseForm();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  async function handleLogin(event:any) {
    event.preventDefault();
    let response = await login(values);
    if(response.ok) {
      // поменять состояние isLogin на true
      // let res = await getUser();
      // console.log(await res.json());
      dispatch(getUser())
      // navigate('/profile');
    }
  }

  return (
    <section className="login">
      <form
      onBlur={checkValidity}
      onChange={checkValidity}
      onSubmit={handleLogin}
      noValidate
      >
        <fieldset className="login__form">
          <input
            className="login__input"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required={true}
            type='email'
            autoComplete='current-password'
          ></input>
          <p className="login__input-error">{errors.email}</p>
          <input
            className="login__input"
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
          <p className="login__input-error">{errors.password}</p>
          <button className="login__submit-button" type='submit' disabled={!formIsValid}>Войти</button>
        </fieldset>
      </form>
    </section>
  );
}

export default Login;
