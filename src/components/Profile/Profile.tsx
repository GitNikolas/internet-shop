import { FC, useMemo, useState } from 'react';
import { ProfileProps } from '.';
import { UseForm } from '../../hooks/UseForm/UseForm';
import './Profile.css';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { patchUser } from '../../utils/usersApi/usersApi';
import RegistrationPopup from '../Popups/RegistrationPopup/RegistrationPopup';
import { UsePopup } from '../../hooks/UseForm/UsePopup';

export const Profile: FC<ProfileProps> = (props) => {

	const {values, errors, formIsValid, setFormIsValid, setValues, setErrors, handleChange, checkValidity} = UseForm();
	const { message, setMessage, isOpen, setIsOpen, isLoading, setIsLoading } = UsePopup();

	const user = useAppSelector(state => state.user.value);

	const [disabled, setDisabled] = useState(true);

	function toggleDisabledForm(event:any){
		event.preventDefault();
		setDisabled(!disabled);
	}

	async function changeUser(event:any) {
		event.preventDefault();
		setIsLoading(true);
		setIsOpen(true);
		try{
			let res = await patchUser(values);
			if(res.ok){
				setDisabled(!disabled);
				setMessage('Данные пользователя успешно обновлены');
				
			} else {
				throw new Error(res);
			}
		}
		catch(err:any){
			setErrors({...errors, serverError:err.message});
		}
		finally {
			setIsLoading(false);
		}
	}

	useMemo(() => {
		const { name, surname } = values;
		if(name === user.name && surname === user.surname) {
			setFormIsValid(false);
		}
	}, [values])

	useMemo(() => {
		setValues({...values, name: user.name, surname: user.surname });
	}, [user])

	return (
	<form {...props}
	className='profile-form'
	onChange={checkValidity}
	>
		<fieldset className='profile-fieldset' disabled={disabled}>
			<p className='profile-form__title'>{`Вход выполнен: ${user.email}`}</p>
			<input
			className='profile-form__input'
			onChange={handleChange}
			name='name'
			value={values.name}
			required={true}
			minLength={1}
			maxLength={30}
			></input>
			<p className='profile-form__error'>{errors.name}</p>
			<input
			className='profile-form__input'
			onChange={handleChange}
			name='surname'
			value={values.surname}
			minLength={1}
			maxLength={30}
			required={true}
			></input>
			<p className='profile-form__error'>{errors.surname}</p>
			<p className='profile-form__error'>{errors.serverError}</p>
		</fieldset>
		{disabled && <button className='profile__submit-button' onClick={toggleDisabledForm}>Редактировать</button>}
		{!disabled && 
		<button className='profile__submit-button'
		onClick={changeUser}
		disabled={!formIsValid}
		>Сохранить</button>
		}
		{!disabled && <button className='profile__submit-button' onClick={toggleDisabledForm}>Отменить</button>}
		<RegistrationPopup
		message={message}
		isOpen={isOpen}
		setIsOpen={setIsOpen}
		isLoading={isLoading}
		></RegistrationPopup>
	</form>
	);
};
