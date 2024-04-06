import { FC, useMemo } from 'react';
import { Navigate } from "react-router-dom";
import { ProtectedRouteProps } from '.';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getUser } from '../../app/User/userSlice';

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ component: Component,  ...props }) => {
	
	const dispatch = useAppDispatch();
	const {status, value: user} = useAppSelector(state => state.user);

	return (
		status === 'loading' ?
		<p>Загрузка</p> :
		(user.isAuthorized ? <Component {...props} /> : <Navigate to="/" replace />)
	);
};
