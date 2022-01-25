import {applyMiddleware, combineReducers, createStore} from 'redux';
import {profileReducer, PostActionType} from './profile-reducer';
import {dialogsReducer, MessageActionType} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {usersReducer, UsersReducerActionType} from './users-reducer';
import {AuthActionType, authReducer} from './auth-reducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {AppActionType, appReducer} from './app-reducer';


const reducersBunch = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
});

export type ActionType = PostActionType | MessageActionType
    | AppActionType | AuthActionType | UsersReducerActionType

export const store = createStore(reducersBunch, applyMiddleware(thunkMiddleware));

export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionType>

export type AppStateType = ReturnType<typeof reducersBunch>


// @ts-ignore
window.store = store