import {authAPI} from '../api/authAPI';
import {Nullable} from './profile-reducer';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

export type SubmitDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
}

type UserDataActionType = {
    id: Nullable<number>,
    email: Nullable<string>,
    login: Nullable<string>,
    isAuth: boolean,
}

const slice = createSlice({
    name: 'auth',
    initialState: {
        id: null as number | null,
        email: null as string | null,
        login: null as string | null,
        remember: false,
        isAuth: false,
        error: '',
        captchaUrl: '',
    },
    reducers: {
        setAuthUserData(state, action: PayloadAction<UserDataActionType>) {
            return {...state, ...action.payload, error: ''}
        },
        stopSubmit(state, action: PayloadAction<string>) {
            state.error = action.payload
        },
        setCaptcha(state, action: PayloadAction<string>) {
            state.captchaUrl = action.payload
        },
    }
})

export const authReducer = slice.reducer
export const {setAuthUserData, setCaptcha, stopSubmit} = slice.actions

export const loginRequest = createAsyncThunk('auth/loginRequest', async (_, {dispatch}) => {
    let res = await authAPI.isAuthRequest()
    if (res.resultCode === 0) {
        let {id, email, login} = res.data
        dispatch(setAuthUserData({id, email, login, isAuth: true}))
    }
})

export const login = createAsyncThunk('auth/login', async (data: SubmitDataType, {dispatch}) => {
    let userLoginRes = await authAPI.userLogin(data)
    if (userLoginRes.resultCode === 0) {
        dispatch(loginRequest())
        dispatch(setCaptcha(''))
    } else if (userLoginRes.resultCode === 10) {
        dispatch(stopSubmit(userLoginRes.messages[0]))
        let captchaRes = await authAPI.captchaRequest()
        dispatch(setCaptcha(captchaRes.data.data.url))
    } else {
        if (userLoginRes.messages.length > 0) dispatch(stopSubmit(userLoginRes.messages[0]))
    }
})

export const logout = createAsyncThunk('auth/logout', async (_, {dispatch}) => {
    let logoutRes = await authAPI.userLogout()
    if (logoutRes.data.resultCode === 0) dispatch(setAuthUserData({id: null, email: null, login: null, isAuth: false}))
})
