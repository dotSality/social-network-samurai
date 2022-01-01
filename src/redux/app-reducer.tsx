import {loginRequest} from './auth-reducer';
import {ThunkAction} from 'redux-thunk';
import {AppStateType} from './redux-store';

const SET_INITIALIZED = 'SET-INITIALIZED'

const initialState = {
    initialized: false
}

type InitStateType = typeof initialState

export const appReducer = (state = initialState, action: CommonActionType): InitStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {...state, initialized: true}
        default:
            return state;
    }
}

export const initializeApp = (): AppThunkType => {
    return (dispatch, getState: () => AppStateType) => {
        let promise = dispatch(loginRequest())
         Promise.all([promise])
            .then(() => dispatch(initSuccess()))
    }
}
type CommonActionType = InitSuccessType

type AppThunkType = ThunkAction<void, AppStateType, unknown, CommonActionType>

export const initSuccess = () => ({type: SET_INITIALIZED} as const)
type InitSuccessType = ReturnType<typeof initSuccess>