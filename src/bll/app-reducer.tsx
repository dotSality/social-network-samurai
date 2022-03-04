import {loginRequest} from './auth-reducer';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Nullable} from './profile-reducer';

export type RequestStatusType = 'loading' | 'idle' | 'failed' | 'succeeded'

const slice = createSlice({
    name: 'app',
    initialState: {
        initialized: false,
        status: 'idle' as RequestStatusType,
        error: null as Nullable<string>,
    },
    reducers: {
        initSuccess(state) {
            state.initialized = true
        },
    }
})

export const appReducer = slice.reducer
export const {initSuccess} = slice.actions

export const initializeApp = createAsyncThunk('app/initializeApp', async (_, {dispatch}) => {
    let promise = dispatch(loginRequest())
    await Promise.all([promise])
    dispatch(initSuccess())
})
