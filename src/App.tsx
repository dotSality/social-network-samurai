import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import {Route} from 'react-router-dom';
import {DialogsContainer} from './Components/Dialogs/DialogsContainer';
import {NavBarContainer} from './Components/NavBar/NavBarContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileInfo/ProfileContainer';

function App() {

    return (
            <div className={'app-wrapper'}>
                <Header/>
                <NavBarContainer/>
                <div className={'app-wrapper-content'}>
                    <Route exact path={'/dialogs/'} render={() =>
                        (<DialogsContainer/>)}/>
                    <Route path={'/profile/:usedId?'} render={() =>
                        (<ProfileContainer/>)}/>
                    <Route path={'/users/'} render={()=> (<UsersContainer/>)}/>
                    <Route path={'/news/'} render={() => (<News/>)}/>
                    <Route path={'/music/'} render={() => (<Music/>)}/>
                    <Route path={'/settings/'} render={() => (<Settings/>)}/>
                </div>
            </div>
    );
}

export default App;
