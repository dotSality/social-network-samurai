import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {usersAPI} from '../api/usersAPI';
import {RootStateType} from './store';
import {UserType} from './users-reducer';
import {setAppError, setAppStatus} from './app-reducer';
import {spliceFriends} from '../utils/spliceFriends/spliceFriends';

const slice = createSlice({
    name: 'sidebar',
    initialState: {
        friends: [] as UserType[],
    },
    reducers: {
        clearFriendsData(state) {
            state.friends = []
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchFriends.fulfilled, (state, action) => {
                state.friends = action.payload
            })
    }
})

export const sidebarReducer = slice.reducer
export const {clearFriendsData} = slice.actions

export const fetchFriends = createAsyncThunk('sidebar/fetchFriends',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            dispatch(setAppStatus('loading'))
            const pageSize = 10
            let {totalCount} = await usersAPI.getUsers(1, pageSize, true)
            let page = Math.floor(Math.random() * (totalCount / pageSize))
            let {items} = await usersAPI.getUsers(page || 1, pageSize, true)
            const friends = spliceFriends(items)
            dispatch(setAppStatus('succeeded'))
            return friends
        } catch (e: any) {
            dispatch(setAppStatus('failed'))
            dispatch(setAppError(e.message))
            return rejectWithValue({})
        }
    })