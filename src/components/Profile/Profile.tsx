import { FC, useMemo } from 'react';
import { ProfileProps } from '.';
import { UseForm } from '../../hooks/UseForm/UseForm';
import './Profile.css';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

export const Profile: FC<ProfileProps> = (props) => {

	const {values, errors, formIsValid, setValues, setErrors, handleChange, checkValidity} = UseForm();

	const user = useAppSelector(state => state.user.value);

	useMemo(() => {
		setValues({...values, name: user.name, surname: user.surname });
	}, [])

	return (
	<form {...props}
	className='profile-form'
	>
		<p className='profile-form__title'>{`Вход выполнен: ${user.email}`}</p>
		<input
		className='profile-form__input'
		onChange={handleChange}
		name='name'
		value={values.name}
		></input>
		<input
		className='profile-form__input'
		onChange={handleChange}
		name='surname'
		value={values.surname}
		></input>
		<button className='profile__submit-button'>Редактировать</button>
	</form>
	);
};
