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
import {addMessage, addPost, state, updateNewMessageText, updateNewPostText} from './redux/state';

function App() {

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
                            addMessage={addMessage}
                            updateNewMessageText={updateNewMessageText}
                        />)}/>
                    <Route path={'/profile'} render={() => (<Profile
                        addPost={addPost}
                        MyPostsPropsType={state.profilePage.posts}
                        messageForNewPost={state.profilePage.messageForNewPost}
                        updateNewPostText={updateNewPostText}
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
