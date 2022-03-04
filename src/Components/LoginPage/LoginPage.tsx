import React from 'react';
import {FormInputsType, LoginForm} from './LoginForm';
import {connect} from 'react-redux';
import {login, SubmitDataType} from '../../bll/auth-reducer';
import {RootStateType} from '../../bll/store';
import {Navigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../bll/hooks';

// type MapStateToPropsType = {
//     isAuth: boolean
//     error: string
//     captchaUrl: string
// }
//
// const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
//     isAuth: state.auth.isAuth,
//     error: state.auth.error,
//     captchaUrl: state.auth.captchaUrl,
// })
//
// type MapDispatchToPropsType = {
//     login: (data: SubmitDataType) => void
// }
//
// type LoginPagePropsType = MapDispatchToPropsType & MapStateToPropsType

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

// export default connect(mapStateToProps, {login})(LoginPage)
