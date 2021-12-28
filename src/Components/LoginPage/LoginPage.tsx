import React from 'react';
import {FormInputsType, LoginForm} from './LoginForm';
import {connect} from 'react-redux';
import {login, SubmitDataType} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Redirect} from 'react-router-dom';

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({isAuth: state.auth.isAuth})

type MapDispatchToPropsType = {
    login: (data: SubmitDataType) => void
}

type LoginPagePropsType = MapDispatchToPropsType & MapStateToPropsType

const LoginPage = (props: LoginPagePropsType) => {

    const onSubmitData = (data: FormInputsType) => {
        props.login(data)
    }

    return props.isAuth ? (
        <Redirect to={'/profile'}/>
    ) : <div>
        <h1>Login page</h1>
        <LoginForm onSubmitData={onSubmitData}/>
    </div>
}

export default connect(mapStateToProps, {login})(LoginPage)
