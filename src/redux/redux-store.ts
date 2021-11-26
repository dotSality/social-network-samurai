import {combineReducers, createStore} from 'redux';
import {profileReducer, PostActionType} from './profile-reducer';
import {dialogsReducer, MessageActionType} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {usersReducer} from './users-reducer';


let reducersBunch = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

export type ActionType = PostActionType | MessageActionType

export const store = createStore(reducersBunch);

export type AppStateType = ReturnType<typeof reducersBunch>