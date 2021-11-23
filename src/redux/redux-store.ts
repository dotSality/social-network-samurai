import {combineReducers, createStore} from 'redux';
import {profileReducer, PostActionType} from './profile-reducer';
import {dialogsReducer, MessageActionType} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';


let reducersBunch = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
});

export type ActionType = PostActionType | MessageActionType


const store = createStore(reducersBunch);

export default store;