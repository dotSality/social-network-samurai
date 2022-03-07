import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {usersAPI} from '../api/usersAPI';
import {RootStateType} from './store';
import {UserType} from './users-reducer';
import {setAppError, setAppStatus} from './app-reducer';

const slice = createSlice({
    name: 'sidebar',
    initialState: {
        friends: [] as UserType[],
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchFriends.fulfilled, (state, action) => {
                state.friends = action.payload
            })
    }
})

export const sidebarReducer = slice.reducer

export const fetchFriends = createAsyncThunk<UserType[], void, { state: RootStateType }>('sidebar/fetchFriends',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            dispatch(setAppStatus('loading'))
            const pageSize = 10
            let usersRes = await usersAPI.getUsers(1, pageSize, true)
            let page = Math.floor(Math.random() * (usersRes.totalCount / pageSize))
            let res = await usersAPI.getUsers(page || 1, pageSize, true)
            dispatch(setAppStatus('succeeded'))
            return res.items
        } catch (e: any) {
            dispatch(setAppStatus('failed'))
            dispatch(setAppError(e.message))
            return rejectWithValue({})
        }
    })