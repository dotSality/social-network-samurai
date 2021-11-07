import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Dialogs from './Components/Dialogs/Dialogs';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';
import {RootStateType} from './redux/state';

function App(props: RootStateType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar friends={props.sidebar.friends}/>
                <div className={'app-wrapper-content'}>
                    <Route exact path={'/dialogs'} render={() =>
                        (<Dialogs DialogPropsItem={props.dialogsPage.dialogs}
                            MessagePropsItem={props.dialogsPage.messages}/>)}/>
                    <Route path={'/profile'} render={() => (<Profile MyPostsPropsType={props.profilePage.posts}/>)}/>
                    <Route path={'/news'} render={() => (<News/>)}/>
                    <Route path={'/music'} render={() => (<Music/>)}/>
                    <Route path={'/settings'} render={() => (<Settings/>)}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
