import {ProfileType} from '../Components/Profile/Profile';
import {profileAPI} from '../api/profileAPI';
import {ProfileDataType} from '../Components/Profile/ProfileInfo/ProfileDataForm/ProfileDataForm';
import {RootStateType} from './store';
import {setEditMode, setFormError} from './form-reducer';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

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
        setUserProfile(state, action: PayloadAction<Nullable<ProfileType>>) {
            state.profile = action.payload
        },
        setStatus(state, action: PayloadAction<string>) {
            state.status = action.payload
        },
        deletePost(state, action: PayloadAction<number>) {
            const postIndex = state.posts.findIndex(p => action.payload === p.id)
            state.posts.splice(postIndex, 1)
        },
        uploadPhotoSuccess(state, action: PayloadAction<any>) {
            state.profile!.photos = action.payload
        }
    },
})

export type Nullable<T> = T | null

export const profileReducer = slice.reducer
export const {deletePost, addPost, uploadPhotoSuccess, setStatus, setUserProfile} = slice.actions

export const loadUserProfile = createAsyncThunk('profile/loadUserProfile', async (userId: number, {dispatch}) => {
    let getProfileRes = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(getProfileRes))
})

export const getUserStatus = createAsyncThunk('profile/getUserStatus', async(userId: number, {dispatch}) => {
    let getStatusRes = await profileAPI.getUserStatus(userId)
    dispatch(setStatus(getStatusRes))
})

export const updateUserStatus = createAsyncThunk('profile/updateUserStatus', async (status: string, {dispatch}) => {
    let updateStatusRes = await profileAPI.updateStatus(status)
    if (updateStatusRes.data.resultCode === 0) dispatch(setStatus(status))
})

export const uploadPhoto = createAsyncThunk('profile/uploadPhoto', async (file: File, {dispatch})=> {
    let res = await profileAPI.uploadPhoto(file)
    if (res.resultCode === 0) dispatch(uploadPhotoSuccess(res.data.photos))
})

export const submitProfile = createAsyncThunk<void, ProfileDataType, {state: RootStateType}>('profile/submitProfile',
    async (profile: ProfileDataType, {dispatch, getState}) => {
    let res = await profileAPI.submitProfile(profile)
    if (res.resultCode === 0) {
        const userId: number = getState().auth.id!
        let profileRes = await profileAPI.getUserProfile(userId)
        dispatch(setUserProfile(profileRes))
        dispatch(setEditMode(false))
        dispatch(setFormError(null))
    } else {
        dispatch(setFormError(res.messages[0]))
    }
})
