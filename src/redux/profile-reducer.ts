import {ProfileType} from '../Components/Profile/ProfileInfo/ProfileContainer';
import {Dispatch} from 'redux';
import {profileAPI} from '../api/api';
import {ProfileDataType} from '../Components/Profile/ProfileInfo/ProfileDataForm/ProfileDataForm';
import {ThunkType} from './redux-store';

const ADD_POST = 'profile/ADD-POST'
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE'
const SET_STATUS = 'profile/SET-STATUS'
const DELETE_POST = 'profile/DELETE-POST'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE-PHOTO-SUCCESS'

export type PostType = {
    id: number
    post: string
    likesCount: number
}

// export type ProfilePageType = {
//     posts: PostType[],
//     profile: Nullable<ProfileType>,
//     status: string,
// }

const initialState = {
    posts: [
        {id: 1, post: 'Hi', likesCount: 15},
        {id: 2, post: 'Yo!', likesCount: 12},
        {id: 3, post: 'Wazzup?', likesCount: 23},
    ] as PostType[],
    profile: null as Nullable<ProfileType>,
    status: '',
}
type InitStateType = typeof initialState
export type Nullable<T> = T | null

export const profileReducer = (state = initialState, action: PostActionType): InitStateType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                post: action.postText,
                likesCount: 0
            };
            return {...state, posts: [newPost, ...state.posts]};
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_STATUS:
            return {...state, status: action.status}
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        case SAVE_PHOTO_SUCCESS:
            // @ts-ignore
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state;
    }
}

export const loadUserProfile = (userId: number): ThunkType =>
    async (dispatch) => {
        let getProfileRes = await profileAPI.getUserProfile(userId)
        dispatch(setUserProfile(getProfileRes))
    }

export const getUserStatus = (userId: number): ThunkType =>
    async (dispatch) => {
        let getStatusRes = await profileAPI.getUserStatus(userId)
        dispatch(setStatus(getStatusRes))
    }

export const updateUserStatus = (status: string): ThunkType =>
    async (dispatch) => {
        let updateStatusRes = await profileAPI.updateStatus(status)
        if (updateStatusRes.data.resultCode === 0) dispatch(setStatus(status))
    }

export const uploadPhoto = (file: File): ThunkType =>
    async (dispatch) => {
        let res = await profileAPI.uploadPhoto(file)
        if (res.resultCode === 0) dispatch(uploadPhotoSuccess(res.data.photos))
    }

export const submitProfile = (profile: ProfileDataType, userId: number): ThunkType =>
    async (dispatch) => {
        let res = await profileAPI.submitProfile(profile)
        if (res.resultCode === 0) {
            let profileRes = await profileAPI.getUserProfile(userId)
            dispatch(setUserProfile(profileRes))
        }
    }

export type PostActionType = AddPostType
    | SetUserProfileType
    | SetStatusType
    | DeletePostType
    | SuccessUploadPhotoType

export const addPost = (postText: string) => ({type: ADD_POST, postText: postText} as const)
export const setUserProfile = (profile: Nullable<ProfileType>) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const deletePost = (postId: number) => ({type: DELETE_POST, postId} as const)
export const uploadPhotoSuccess = (photos: any) => ({type: SAVE_PHOTO_SUCCESS, photos} as const)

type AddPostType = ReturnType<typeof addPost>
type SetUserProfileType = ReturnType<typeof setUserProfile>
type SetStatusType = ReturnType<typeof setStatus>
type DeletePostType = ReturnType<typeof deletePost>
type SuccessUploadPhotoType = ReturnType<typeof uploadPhotoSuccess>