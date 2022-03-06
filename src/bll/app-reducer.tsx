import {authMe} from './auth-reducer';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {loadUserProfile, Nullable} from './profile-reducer';
import {RootStateType} from './store';
import {ProfileType} from '../Components/Profile/Profile';

export type RequestStatusType = 'loading' | 'idle' | 'failed' | 'succeeded'

const slice = createSlice({
    name: 'app',
    initialState: {
        initialized: false,
        status: 'idle' as RequestStatusType,
        error: null as Nullable<string>,
    },
    reducers: {
        setAppInit(state) {
            state.initialized = true
        },
        setAppStatus(state, action: PayloadAction<RequestStatusType>) {
            state.status = action.payload;
        },
        setAppError(state, action: PayloadAction<string | null>) {
            state.error = action.payload
        }
    },
})

export const appReducer = slice.reducer
export const {setAppStatus, setAppError, setAppInit} = slice.actions

export const initializeApp = createAsyncThunk('app/initializeApp',
    async (_, {dispatch, rejectWithValue, getState}) => {
    dispatch(setAppStatus('loading'))
    try {
        await dispatch(authMe())
        dispatch(setAppStatus('succeeded'))
    } catch (e: any) {
        dispatch(setAppStatus('failed'))
        setAppError('Login failed')
        return rejectWithValue({})
    } finally {
        dispatch(setAppInit())
    }
})
