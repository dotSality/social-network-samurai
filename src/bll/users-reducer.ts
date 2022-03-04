import {usersAPI} from '../api/usersAPI';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

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
        isFetching: true,
        isFollowing: [] as number[]
    },
    reducers: {
        followToggle(state, action: PayloadAction<number>) {
            const user = state.users.find(u => u.id === action.payload)
            if (user) user.followed = !user.followed
        },
        setUsers(state, action: PayloadAction<UserType[]>) {
            state.users = action.payload
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        },
        setTotalCount(state, action: PayloadAction<number>) {
            state.totalUsersCount = action.payload
        },
        toggleFetching(state, action: PayloadAction<boolean>) {
            state.isFetching = action.payload
        },
        toggleIsFollowingProgress(state, action: PayloadAction<{ isFetching: boolean, userID: number }>) {
            state.isFollowing = action.payload.isFetching
                ? [...state.isFollowing, action.payload.userID]
                : state.isFollowing.filter(id => id !== action.payload.userID)
        }
    },
})

export const usersReducer = slice.reducer
export const {setCurrentPage, setTotalCount, setUsers, toggleFetching, followToggle, toggleIsFollowingProgress} = slice.actions

export const requestUsers = createAsyncThunk('users/requestUsers',
    async ({currentPage, pageSize}: { currentPage: number, pageSize: number }, {dispatch}) => {
        let getUsersRes = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleFetching(false));
        dispatch(setUsers(getUsersRes.items));
        dispatch(setTotalCount(getUsersRes.totalCount));
    })

export const toggleFollow = createAsyncThunk('users/toggleFollow',
    async ({userID, isFollowed}: { userID: number, isFollowed: boolean }, {dispatch}) => {
        dispatch(toggleIsFollowingProgress({isFetching: true, userID}))
        await usersAPI.getUserData(userID)
        if (isFollowed) {
            let unfollowRes = await usersAPI.unfollowUserRequest(userID)
            if (unfollowRes.data.resultCode === 0) dispatch(followToggle(userID))
        } else {
            let followRes = await usersAPI.followUserRequest(userID)
            if (followRes.data.resultCode === 0) dispatch(followToggle(userID))
        }
        dispatch(toggleIsFollowingProgress({isFetching: false, userID}))
    })
