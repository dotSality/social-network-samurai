import { ThunkAction } from 'redux-thunk';
import {authAPI} from '../api/api';
import {AppStateType} from './redux-store';
import {Nullable} from './profile-reducer';

const SET_USER_DATA = 'SET-USER-DATA'
const LOGIN_USER = 'LOGIN-USER'
const STOP_SUBMIT = 'STOP-SUBMIT'
const SET_CAPTCHA = 'SET-CAPTCHA'

export type SubmitDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
}

const initialState = {
    id: null as number | null,
    email: null,
    login: null,
    remember: false,
    isAuth: false,
    error: '',
    captchaUrl: '',
}

type InitialStateType = typeof initialState

export const authReducer = (state = initialState, action: CommonActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload, error: ''} as InitialStateType
        case STOP_SUBMIT:
            return {...state, error: action.error} as InitialStateType
        case SET_CAPTCHA:
            return {...state, captchaUrl: action.url} as InitialStateType
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
                dispatch(setCaptcha(''))
            } else if (res.data.resultCode === 10) {
                dispatch(stopSubmit(res.data.messages[0]))
                authAPI.captchaRequest().then(res => {
                    dispatch(setCaptcha(res.data.url))
                })
            } else {
                if (res.data.messages.length > 0) dispatch(stopSubmit(res.data.messages[0]))
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


type CommonActionType = SubmitUserLoginType | SetDataActionType | StopSubmitType | SetCaptchaType

export const submitUserLogin = (userId: number) => ({type: LOGIN_USER, userId} as const)
type SubmitUserLoginType = ReturnType<typeof submitUserLogin>
export const setAuthUserData = (id: Nullable<number>, email:Nullable<string>, login: Nullable<string>, isAuth: boolean, captcha: string = '') =>
    ({type: SET_USER_DATA, payload: {id, email, login, isAuth, captcha}} as const)
type SetDataActionType = ReturnType<typeof setAuthUserData>
export const stopSubmit = (error: string) => ({type: STOP_SUBMIT, error} as const)
type StopSubmitType = ReturnType<typeof stopSubmit>
export const setCaptcha = (url: string) => ({type: SET_CAPTCHA, url} as const)
type SetCaptchaType = ReturnType<typeof setCaptcha>
