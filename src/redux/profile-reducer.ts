import {ProfileType} from '../Components/Profile/ProfileInfo/ProfileContainer';
import {Dispatch} from 'redux';
import {profileAPI} from '../api/api';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'

export type PostType = {
    id: number
    post: string
    likesCount: number
}

const initialState: ProfilePageType = {
    messageForNewPost: '',
    posts: [
        {id: 1, post: 'Hi', likesCount: 15},
        {id: 2, post: 'Yo!', likesCount: 12},
        {id: 3, post: 'Wazzup?', likesCount: 23},
    ] as PostType[],
    profile: null,
    status: '',
}

type ProfilePageType = {
    messageForNewPost: string,
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
            return {...state, posts: [newPost, ...state.posts], messageForNewPost: ''};
        case UPDATE_NEW_POST_TEXT:
            return {...state, messageForNewPost: action.newText};
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
    | updatePostType
    | setUserProfileType
    | setStatusType

export const addPost = (postText: string) => ({type: ADD_POST, postText: postText} as const)
export const updatePost = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText: newText} as const)
export const setUserProfile = (profile: Nullable<ProfileType>) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
type addPostType = ReturnType<typeof addPost>
type updatePostType = ReturnType<typeof updatePost>
type setUserProfileType = ReturnType<typeof setUserProfile>
type setStatusType = ReturnType<typeof setStatus>