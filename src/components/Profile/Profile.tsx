import { FC } from 'react';
import { ProfileProps } from '.';
import { UseForm } from '../../hooks/UseForm/UseForm';
import './Profile.css';

export const Profile: FC<ProfileProps> = (props) => {

	const {values, errors, formIsValid, setValues, setErrors, handleChange, checkValidity} = UseForm();

	return (
	<form {...props}
	className='profile-form'
	>
		<p className='profile-form__title'>Приветствуем, userName!</p>
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
