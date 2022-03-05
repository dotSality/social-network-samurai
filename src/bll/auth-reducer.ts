import {authAPI} from '../api/authAPI';
import {Nullable} from './profile-reducer';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {setAppError, setAppStatus} from './app-reducer';

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
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(authMe.fulfilled, ((state, action) => {
                return {...state, ...action.payload}
            }))
            .addCase(logout.fulfilled, (state, action) => {
                return {...state, ...action.payload}
            })
            .addCase(login.fulfilled, (state, action) => {
                if (action.payload) state.captchaUrl = action.payload
            })
    }
})

export const authReducer = slice.reducer

export const authMe = createAsyncThunk('auth/loginRequest', async (_, {dispatch, rejectWithValue}) => {
    dispatch(setAppStatus('loading'))
    try {
        let res = await authAPI.isAuthRequest()
        if (res.resultCode === 0) {
            let {id, email, login} = res.data
            dispatch(setAppStatus('succeeded'))
            return {id, email, login, isAuth: true}
        } else {
            dispatch(setAppError(res.messages[0]))
            dispatch(setAppStatus('failed'))
            return rejectWithValue({})
        }
    } catch (e: any) {
        dispatch(setAppError(e.message))
        dispatch(setAppStatus('failed'))
        return rejectWithValue({})
    }
})

export const login = createAsyncThunk('auth/login', async (data: SubmitDataType, {dispatch, rejectWithValue}) => {
    dispatch(setAppStatus('loading'))
    try {
        let res = await authAPI.userLogin(data)
        if (res.resultCode === 0) {
            dispatch(authMe())
            dispatch(setAppStatus('succeeded'))
            dispatch(setAppError(null))
            return ''
        } else if (res.resultCode === 10) {
            dispatch(setAppError(res.messages[0]))
            let captchaRes = await authAPI.captchaRequest()
            dispatch(setAppStatus('failed'))
            return captchaRes.data.url
        } else {
            if (res.messages.length > 0) dispatch(setAppError(res.messages[0]))
            dispatch(setAppStatus('failed'))
            return rejectWithValue({})
        }
    } catch (e: any) {
        dispatch(setAppStatus('failed'))
        dispatch(setAppError(e.message))
        return rejectWithValue({})
    }
})

export const logout = createAsyncThunk('auth/logout', async (_, {dispatch, rejectWithValue}) => {
    dispatch(setAppStatus('loading'))
    try {
        let res = await authAPI.userLogout()
        if (res.data.resultCode === 0) {
            dispatch(setAppStatus('succeeded'))
            return {id: null, email: null, login: null, isAuth: false}
        } else {
            dispatch(setAppStatus('failed'))
            dispatch(setAppError(res.data.messages[0]))
            return rejectWithValue({})
        }
    } catch (e: any) {
        dispatch(setAppStatus('failed'))
        dispatch(setAppError(e.message))
        return rejectWithValue({})
    }
})
