import {combineReducers} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {usersReducer} from './users-reducer';
import {authReducer} from './auth-reducer';
import {appReducer} from './app-reducer';
import {configureStore} from '@reduxjs/toolkit';


const reducersBunch = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
});

export const store = configureStore({
    reducer: reducersBunch,
});

export type AppDispatchType = typeof store.dispatch
export type RootStateType = ReturnType<typeof reducersBunch>

// @ts-ignore
window.store = store