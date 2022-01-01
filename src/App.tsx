import React from 'react';
import './App.css';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import {Route, withRouter} from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import {NavBarContainer} from './Components/NavBar/NavBarContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileInfo/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import LoginPage from './Components/LoginPage/LoginPage';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import {AppStateType} from './redux/redux-store';
import {Preloader} from './Components/common/Preloader/Preloader';

type HeaderPropsType = MapDispatchToPropsType & MapStateToPropsType

type MapStateToPropsType = {
    initialized: boolean
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized
    }
}

class App extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        else return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <NavBarContainer/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/login/'} render={() => (<LoginPage/>)}/>
                    <Route exact path={'/dialogs/'} render={() =>
                        (<DialogsContainer/>)}/>
                    <Route path={'/profile/:usedId?'} render={() =>
                        (<ProfileContainer/>)}/>
                    <Route path={'/users/'} render={() => (<UsersContainer/>)}/>
                    <Route path={'/news/'} render={() => (<News/>)}/>
                    <Route path={'/music/'} render={() => (<Music/>)}/>
                    <Route path={'/settings/'} render={() => (<Settings/>)}/>
                </div>
            </div>
        );
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
