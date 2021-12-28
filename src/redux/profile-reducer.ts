import {ProfileType} from '../Components/Profile/ProfileInfo/ProfileContainer';
import {Dispatch} from 'redux';
import {profileAPI} from '../api/api';

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'

export type PostType = {
    id: number
    post: string
    likesCount: number
}

const initialState: ProfilePageType = {
    posts: [
        {id: 1, post: 'Hi', likesCount: 15},
        {id: 2, post: 'Yo!', likesCount: 12},
        {id: 3, post: 'Wazzup?', likesCount: 23},
    ] as PostType[],
    profile: null,
    status: '',
}

type ProfilePageType = {
    posts: PostType[],
    profile: Nullable<ProfileType>,
    status: string,
}

export type Nullable<T> = T | null

export const profileReducer = (state = initialState, action: PostActionType): ProfilePageType => {
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
        default:
            return state;
    }
}

export const loadUserProfile = (userId: string) => (dispatch: Dispatch) => {
        profileAPI.getUserProfile(userId)
            .then(response => dispatch(setUserProfile(response)));
}

export const getUserStatus = (userId: number) => (dispatch: Dispatch) => {
        profileAPI.getUserStatus(userId)
            .then(res => {
                dispatch(setStatus(res))})
            }

export const updateUserStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) dispatch(setStatus(status))
        })
}


export type PostActionType = addPostType
    | setUserProfileType
    | setStatusType

export const addPost = (postText: string) => ({type: ADD_POST, postText: postText} as const)
export const setUserProfile = (profile: Nullable<ProfileType>) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
type addPostType = ReturnType<typeof addPost>
type setUserProfileType = ReturnType<typeof setUserProfile>
type setStatusType = ReturnType<typeof setStatus>