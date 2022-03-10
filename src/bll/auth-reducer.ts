import {authAPI} from '../api/authAPI';
import {Nullable} from './profile-reducer';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {setAppError, setAppStatus} from './app-reducer';
import {ProfileType} from '../Components/Profile/Profile';
import {profileAPI} from '../api/profileAPI';
import {changeFriendsCount, clearFriendsData, fetchFriends} from './sidebar-reducer';

export type SubmitDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
}

type InitStateType = {
    authProfile: Nullable<ProfileType>;
    id: Nullable<number>;
    email: Nullable<string>;
    login: Nullable<string>;
    status: Nullable<string>;
    remember: boolean;
    isAuth: boolean;
    error: Nullable<string>;
    captchaUrl: Nullable<string>;
}

type AuthDataType = Pick<InitStateType, 'authProfile' | 'id' | 'email' | 'login' | 'status' | 'isAuth'>

const slice = createSlice({
    name: 'auth',
    initialState: {
        authProfile: null as Nullable<ProfileType>,
        id: null as Nullable<number>,
        email: null as Nullable<string>,
        login: null as Nullable<string>,
        status: null as Nullable<string>,
        remember: false,
        isAuth: false,
        error: null as Nullable<string>,
        captchaUrl: null as Nullable<string>,
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(logout.fulfilled, (state) => {
                return {
                    id: null,
                    isAuth: false,
                    error: null,
                    login: null,
                    status: null,
                    email: null,
                    authProfile: null,
                    captchaUrl: null,
                    remember: false
                }
            })
            .addCase(login.fulfilled, (state, action) => {
                if (action.payload) {
                    state.captchaUrl = action.payload
                }
            })
            .addCase(fetchAuthUserData.fulfilled, (state, action) => {
                return {...state, ...action.payload}
            })
    }
})

export const authReducer = slice.reducer

export const fetchAuthUserData = createAsyncThunk('auth/fetchAuthUserData',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            let res = await authAPI.isAuthRequest()
            if (res.resultCode === 0) {
                await dispatch(fetchFriends())
                let {id, email, login} = res.data
                let authProfile = await profileAPI.getUserProfile(id)
                let status = await profileAPI.getUserStatus(id)
                return {id, email, login, isAuth: true, authProfile, status}
            } else {
                dispatch(setAppStatus('failed'))
                dispatch(setAppError(res.messages[0]))
                return rejectWithValue(null)
            }
        } catch (e: any) {
            return rejectWithValue(null)
        }
    })

export const login = createAsyncThunk('auth/login', async (data: SubmitDataType, {dispatch, rejectWithValue}) => {
    dispatch(setAppStatus('loading'))
    try {
        let res = await authAPI.userLogin(data)
        if (res.resultCode === 0) {
            await dispatch(fetchAuthUserData())
            dispatch(setAppError(null))
            dispatch(setAppStatus('succeeded'))
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
            dispatch(clearFriendsData())
            dispatch(changeFriendsCount(null))
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
