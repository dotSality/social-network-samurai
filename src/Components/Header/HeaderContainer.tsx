import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {loginRequest} from '../../redux/auth-reducer';

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
    login: string
}

type MapDispatchToPropsType = {
    loginRequest: () => void
}

export type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {loginRequest})(HeaderContainer)