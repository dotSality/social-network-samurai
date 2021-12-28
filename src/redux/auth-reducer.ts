import {Dispatch} from 'redux';
import {authAPI} from '../api/api';

const SET_USER_DATA = 'SET-USER-DATA'
const LOGIN_USER = 'LOGIN-USER'

export type SubmitDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
}

const initialState = {
    id: 0,
    email: '',
    login: '',
    remember: false,
    isAuth: false,
}

type InitialStateType = typeof initialState

export const authReducer = (state = initialState, action: CommonActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        default:
            return state;
    }
}

export const loginRequest = () => {
    return (dispatch: Dispatch) => {
        authAPI.isAuthRequest().then(response => {
                if (response.resultCode === 0) {
                    let {id, email, login} = response.data
                    dispatch(setAuthUserData(id, email, login))
                }
        })
    }
}

type CommonActionType = SubmitUserLoginType | SetDataActionType

export const submitUserLogin = (userId: number) => ({type: LOGIN_USER, userId} as const)
type SubmitUserLoginType = ReturnType<typeof submitUserLogin>
export const setAuthUserData = (id: number, email: string, login: string) => ({type: SET_USER_DATA, data: {id, email, login}} as const)
type SetDataActionType = ReturnType<typeof setAuthUserData>
