import {combineReducers, createStore} from 'redux';
import {profileReducer, PostActionType} from './profile-reducer';
import {dialogsReducer, MessageActionType} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {usersReducer} from './users-reducer';
import {authReducer} from './auth-reducer';


const reducersBunch = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

export type ActionType = PostActionType | MessageActionType

export const store = createStore(reducersBunch);

export type AppStateType = ReturnType<typeof reducersBunch>


// @ts-ignore
window.store = store