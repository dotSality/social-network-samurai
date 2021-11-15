import {PostType, ProfilePageType} from './store';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState: ProfilePageType =  {
        messageForNewPost: '',
        posts: [
            {id: 1, post: 'Hi', likesCount: 15},
            {id: 2, post: 'Yo!', likesCount: 12},
            {id: 3, post: 'Wazzup?', likesCount: 23},
        ]
    }

const profileReducer = (state = initialState, action: PostActionType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                post: action.postText,
                likesCount: 0
            };
            state.posts.unshift(newPost)
            state.messageForNewPost = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.messageForNewPost = action.newText
            return state;
        default:
            return state;
    }
}

export type PostActionType = ReturnType<typeof addPostAC> | ReturnType<typeof updatePostAC>

export const addPostAC = (postText: string) => ({type: ADD_POST, postText: postText} as const)
export const updatePostAC = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText: newText} as const)

export default profileReducer;