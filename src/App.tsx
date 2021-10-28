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
import {state} from './redux/state';

function App() {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Route exact path={'/dialogs'} render={() =>
                        (<Dialogs DialogPropsItem={state.dialogsPage.dialogs}
                            MessagePropsItem={state.dialogsPage.messages}/>)}/>
                    <Route path={'/profile'} render={() => (<Profile MyPostsPropsType={state.profilePage.posts}/>)}/>
                    <Route path={'/news'} render={() => (<News/>)}/>
                    <Route path={'/music'} render={() => (<Music/>)}/>
                    <Route path={'/settings'} render={() => (<Settings/>)}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
