import React from 'react';
import {FormInputsType, LoginForm} from './LoginForm';
import {login} from '../../bll/auth-reducer';
import {Navigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../bll/hooks';

export const LoginPage = () => {

    const dispatch = useAppDispatch()
    const {isAuth, error, captchaUrl} = useAppSelector(state => state.auth)
    const onSubmitData = (data: FormInputsType) => {
        dispatch(login(data))
    }

    return isAuth ? (
        <Navigate to={'/profile'}/>
    ) : <div>
        <h1>Login page</h1>
        <LoginForm captchaUrl={captchaUrl} error={error} onSubmitData={onSubmitData}/>
    </div>
}
