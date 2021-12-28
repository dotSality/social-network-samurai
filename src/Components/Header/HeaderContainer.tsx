import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {loginRequest, logout} from '../../redux/auth-reducer';
import {Nullable} from '../../redux/profile-reducer';

class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        this.props.loginRequest();
    }

    render() {
        return <Header {...this.props}/>
    }
}

type MapStateToPropsType = {
    isAuth: boolean,
    login: Nullable<string>
}

type MapDispatchToPropsType = {
    loginRequest: () => void
    logout: () => void
}

export type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {loginRequest, logout})(HeaderContainer)