import {ProfileType} from '../Components/Profile/ProfileInfo/ProfileContainer';
import {Dispatch} from 'redux';
import {usersAPI} from '../api/api';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

export type PostType = {
    id: number
    post: string
    likesCount: number
}

export type ProfilePageType = {
    messageForNewPost: string
    posts: PostType[]
    profile: any
}

const initialState = {
    messageForNewPost: '',
    posts: [
        {id: 1, post: 'Hi', likesCount: 15},
        {id: 2, post: 'Yo!', likesCount: 12},
        {id: 3, post: 'Wazzup?', likesCount: 23},
    ] as PostType[],
    profile: null
}

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
            return {...state, profile: {...action.profile}};
        default:
            return state;
    }
}

export const loadUserProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        usersAPI.getUserProfile(userId)
            .then(response => {
                console.log(response)
                    dispatch(setUserProfile(response))
                }
            );
    }
}

export type PostActionType = addPost
    | updatePost
    | setUserProfile

export const addPost = (postText: string) => ({type: ADD_POST, postText: postText} as const)
export const updatePost = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText: newText} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
type addPost = ReturnType<typeof addPost>
type updatePost = ReturnType<typeof updatePost>
type setUserProfile = ReturnType<typeof setUserProfile>