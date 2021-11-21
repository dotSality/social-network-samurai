import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {StoreType} from './store';

let reducersBunch = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
});

const store: StoreType = createStore(reducersBunch);

export default store;