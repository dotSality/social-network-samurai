import {Dispatch} from 'redux';
import { ThunkAction } from 'redux-thunk';
import {authAPI} from '../api/api';
import {AppStateType} from './redux-store';
import {Nullable} from './profile-reducer';

const SET_USER_DATA = 'SET-USER-DATA'
const LOGIN_USER = 'LOGIN-USER'

export type SubmitDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
}

const initialState = {
    id: null,
    email: null,
    login: null,
    remember: false,
    isAuth: false,
}

type InitialStateType = typeof initialState

export const authReducer = (state = initialState, action: CommonActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return <InitialStateType>{...state, ...action.payload}
        default:
            return state;
    }
}

export const loginRequest = (): AuthThunkType => {
    return (dispatch, getState: () => AppStateType) => {
        authAPI.isAuthRequest().then(response => {
                if (response.resultCode === 0) {
                    let {id, email, login} = response.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
        })
    }
}

export const login = (data: SubmitDataType): AuthThunkType => {
    return (dispatch, getState: () => AppStateType) => {
        authAPI.userLogin(data).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(loginRequest())
            }
        })
    }
}

export const logout = (): AuthThunkType => {
   return (dispatch, getState: () => AppStateType) => {
       authAPI.userLogout().then(res => {
           if (res.data.resultCode === 0) {
               dispatch(setAuthUserData(null, null, null, false))
           }
       })
   }
}

type AuthThunkType = ThunkAction<void, AppStateType, unknown, CommonActionType>


type CommonActionType = SubmitUserLoginType | SetDataActionType

export const submitUserLogin = (userId: number) => ({type: LOGIN_USER, userId} as const)
type SubmitUserLoginType = ReturnType<typeof submitUserLogin>
export const setAuthUserData = (id: Nullable<number>, email:Nullable<string>, login: Nullable<string>, isAuth: boolean) =>
    ({type: SET_USER_DATA, payload: {id, email, login, isAuth}} as const)
type SetDataActionType = ReturnType<typeof setAuthUserData>
