import React from 'react';
import {FormInputsType, LoginForm} from './LoginForm';

export const LoginPage = () => {

     const onSubmitData = (data: FormInputsType) => {
         console.log(data)
     }

    return <div>
        <h1>Login page</h1>
        <LoginForm onSubmitData={onSubmitData}/>
    </div>
}