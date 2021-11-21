import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import {Route} from 'react-router-dom';
import {DialogsContainer} from './Components/Dialogs/DialogsContainer';
import {StoreType} from './redux/store';

// export type StorePropsType = {
//     store: StoreType
// }

function App() {
    // const state = props.store.getState();
    return (
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Route exact path={'/dialogs'} render={() =>
                        (<DialogsContainer/>)}/>
                    <Route path={'/profile'} render={() =>
                        (<Profile/>)}/>
                    <Route path={'/news'} render={() => (<News/>)}/>
                    <Route path={'/music'} render={() => (<Music/>)}/>
                    <Route path={'/settings'} render={() => (<Settings/>)}/>
                </div>
            </div>
    );
}

export default App;
