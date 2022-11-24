import React from 'react';
import { FormInputsType, LoginForm } from './LoginForm';
import { login } from '../../bll/auth-reducer';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../bll/hooks';

const LoginPage = () => {

  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.auth);
  const { isAuth, captchaUrl } = data!;
  const onSubmitData = (data: FormInputsType) => {
    dispatch(login(data));
  };

  if (isAuth) return <Navigate to={'/'}/>;

  return <div>
    <h1 style={{ padding: '0 20px 20px', fontWeight: '700', fontSize: '20px' }}>Login page</h1>
    <LoginForm captchaUrl={captchaUrl} onSubmitData={onSubmitData}/>
  </div>;
};

export default LoginPage;