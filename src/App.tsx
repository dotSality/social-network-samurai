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
import {StoreType} from './redux/store';
import store from './redux/redux-store';

// type PropsType = {
//     store: StoreType
// }

type PropsType = {
    store: typeof store
}

function App(props: PropsType) {
    const state = props.store.getState();

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar friends={state.sidebar.friends}/>
                <div className={'app-wrapper-content'}>
                    <Route exact path={'/dialogs'} render={() =>
                        (<Dialogs DialogPropsItem={state.dialogsPage.dialogs}
                            MessagePropsItem={state.dialogsPage.messages}
                            newMessageText={state.dialogsPage.newMessageText}
                            dispatch={props.store.dispatch.bind(props.store)}
                        />)}/>
                    <Route path={'/profile'} render={() => (<Profile
                        dispatch={props.store.dispatch.bind(props.store)}
                        MyPostsPropsType={state.profilePage.posts}
                        messageForNewPost={state.profilePage.messageForNewPost}
                    />)}/>
                    <Route path={'/news'} render={() => (<News/>)}/>
                    <Route path={'/music'} render={() => (<Music/>)}/>
                    <Route path={'/settings'} render={() => (<Settings/>)}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
