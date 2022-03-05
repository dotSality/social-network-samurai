import {ProfileType} from '../Components/Profile/Profile';
import {profileAPI} from '../api/profileAPI';
import {ProfileDataType} from '../Components/Profile/ProfileInfo/ProfileDataForm/ProfileDataForm';
import {RootStateType} from './store';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {setAppError, setAppStatus} from './app-reducer';

export type PostType = {
    id: number
    post: string
    likesCount: number
}

const slice = createSlice({
    name: 'profile',
    initialState: {
        posts: [
            {id: 1, post: 'Hi', likesCount: 15},
            {id: 2, post: 'Yo!', likesCount: 12},
            {id: 3, post: 'Wazzup?', likesCount: 23},
        ] as PostType[],
        profile: null as Nullable<ProfileType>,
        status: '',
    },
    reducers: {
        addPost(state, action: PayloadAction<string>) {
            const newPost: PostType = {
                id: new Date().getTime(),
                post: action.payload,
                likesCount: 0
            };
            state.posts.unshift(newPost)
        },
        deletePost(state, action: PayloadAction<number>) {
            const postIndex = state.posts.findIndex(p => action.payload === p.id)
            state.posts.splice(postIndex, 1)
        },
    },
    extraReducers: builder => {
        builder
            .addCase(loadUserProfile.fulfilled, (state, action) => {
                state.profile = action.payload
            })
            .addCase(getUserStatus.fulfilled, (state, action) => {
                state.status = action.payload
            })
            .addCase(uploadPhoto.fulfilled, (state, action) => {
                state.profile!.photos = action.payload
            })
    }
})

export type Nullable<T> = T | null

export const profileReducer = slice.reducer
export const {deletePost, addPost} = slice.actions

export const loadUserProfile = createAsyncThunk('profile/loadUserProfile', async (userId: number, {dispatch, rejectWithValue}) => {
    dispatch(setAppStatus('loading'))
    try {
        let res = await profileAPI.getUserProfile(userId)
        console.log(res)
        dispatch(setAppError(null))
        dispatch(setAppStatus('succeeded'))
        return res
    } catch (e: any) {
        dispatch(setAppError(e.message))
        dispatch(setAppStatus('failed'))
        return rejectWithValue({})
    }
})

export const getUserStatus = createAsyncThunk('profile/getUserStatus', async (userId: number, {dispatch, rejectWithValue}) => {
    dispatch(setAppStatus('loading'))
    try {
        let res = await profileAPI.getUserStatus(userId)
        dispatch(setAppError(null))
        dispatch(setAppStatus('succeeded'))
        return res
    } catch (e: any) {
        dispatch(setAppError(e.message))
        dispatch(setAppStatus('failed'))
        return rejectWithValue({})
    }
})

export const updateUserStatus = createAsyncThunk('profile/updateUserStatus', async (status: string, {dispatch, rejectWithValue}) => {
    dispatch(setAppStatus('loading'))
    try {
        let res = await profileAPI.updateStatus(status)
        if (res.data.resultCode === 0) {
            dispatch(setAppStatus('succeeded'))
            dispatch((setAppError(null)))
            return status
        } else {
            dispatch(setAppError(res.data.messages[0]))
            dispatch(setAppStatus('failed'))
            return rejectWithValue({})
        }
    } catch (e: any) {
        dispatch(setAppError(e.message))
        dispatch(setAppStatus('failed'))
        return rejectWithValue({})
    }
})

export const uploadPhoto = createAsyncThunk('profile/uploadPhoto', async (file: File, {dispatch, rejectWithValue}) => {
    dispatch(setAppStatus('loading'))
    try {
        let res = await profileAPI.uploadPhoto(file)
        if (res.resultCode === 0) {
            return res.data.photos
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

export const submitProfile = createAsyncThunk<void, ProfileDataType, { state: RootStateType }>('profile/submitProfile',
    async (profile: ProfileDataType, {dispatch, getState, rejectWithValue}) => {
        dispatch(setAppStatus('loading'))
        try {
            let res = await profileAPI.submitProfile(profile)
            if (res.resultCode === 0) {
                const userId = getState().auth.id!
                await dispatch(loadUserProfile(userId))
                dispatch(setAppError(null))
                dispatch(setAppStatus('succeeded'))
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
