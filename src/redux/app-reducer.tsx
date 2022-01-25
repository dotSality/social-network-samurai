import {loginRequest} from './auth-reducer';
import {ThunkAction} from 'redux-thunk';
import {AppStateType, ThunkType} from './redux-store';

const SET_INITIALIZED = 'app/SET-INITIALIZED'

const initialState = {
    initialized: false
}

type InitStateType = typeof initialState

export const appReducer = (state = initialState, action: AppActionType): InitStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {...state, initialized: true}
        default:
            return state;
    }
}

export const initializeApp = (): ThunkType => async (dispatch) => {
    let promise = dispatch(loginRequest())
    await Promise.all([promise])
    dispatch(initSuccess())
}
export type AppActionType = InitSuccessType

export const initSuccess = () => ({type: SET_INITIALIZED} as const)
type InitSuccessType = ReturnType<typeof initSuccess>