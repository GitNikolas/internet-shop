import React, {useMemo} from 'react';
import { getUser } from '../../app/User/userSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

export function UseAuthorization() {
    const dispatch = useAppDispatch();

    useMemo(() => {
        dispatch(getUser());
    }, [])
}

