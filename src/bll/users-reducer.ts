import {usersAPI} from '../api/usersAPI';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {setAppError, setAppStatus} from './app-reducer';

type PhotosType = {
    small: string | null
    large: string | null
}

export type UserType = {
    name: string,
    id: number,
    uniqueUrlName: string | null,
    photos: PhotosType,
    status: string | null,
    followed: boolean,
}

const slice = createSlice({
    name: 'users',
    initialState: {
        users: [] as UserType[],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        isFollowing: [] as number[]
    },
    reducers: {
        followToggle(state, action: PayloadAction<number>) {
            const user = state.users.find(u => u.id === action.payload)
            if (user) user.followed = !user.followed
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        },
        toggleIsFollowingProgress(state, action: PayloadAction<{ isFetching: boolean, userID: number }>) {
            state.isFollowing = action.payload.isFetching
                ? [...state.isFollowing, action.payload.userID]
                : state.isFollowing.filter(id => id !== action.payload.userID)
        },
        clearUsersData(state) {
            return {users: [], pageSize: 5, totalUsersCount: 0, currentPage: 1, isFetching: false, isFollowing: []}
        }
    },
    extraReducers: builder => {
        builder
            .addCase(requestUsers.fulfilled, (state, action) => {
                return {...state, ...action.payload}
            })
    }
})

export const usersReducer = slice.reducer
export const {setCurrentPage, followToggle, toggleIsFollowingProgress, clearUsersData} = slice.actions

export const requestUsers = createAsyncThunk('users/requestUsers',
    async ({currentPage, pageSize}: { currentPage: number, pageSize: number }, {dispatch}) => {
        dispatch(setAppStatus('loading'))
        try {
            let res = await usersAPI.getUsers(currentPage, pageSize)
            dispatch(setAppStatus('succeeded'))
            dispatch(setAppError(null))
            return {isFetching: false, users: res.items, totalUsersCount: res.totalCount}
        } catch (e: any) {
            dispatch(setAppStatus('failed'))
            dispatch(setAppError(e.message))
        }
    })

export const toggleFollow = createAsyncThunk('users/toggleFollow',
    async ({userID, isFollowed}: { userID: number, isFollowed: boolean }, {dispatch}) => {
        try {
            dispatch(toggleIsFollowingProgress({isFetching: true, userID}))
            if (isFollowed) {
                let unfollowRes = await usersAPI.unfollowUserRequest(userID)
                if (unfollowRes.data.resultCode === 0) dispatch(followToggle(userID))
            } else {
                let followRes = await usersAPI.followUserRequest(userID)
                if (followRes.data.resultCode === 0) dispatch(followToggle(userID))
            }
            dispatch(toggleIsFollowingProgress({isFetching: false, userID}))
            dispatch(setAppError(null))
        } catch (e: any) {
            dispatch(setAppError(e.message))
        }
    })
