
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type PostType = {
    id: number
    post: string
    likesCount: number
}

export type ProfilePageType = {
    messageForNewPost: string
    posts: PostType[]
}

let initialState: ProfilePageType =  {
        messageForNewPost: '',
        posts: [
            {id: 1, post: 'Hi', likesCount: 15},
            {id: 2, post: 'Yo!', likesCount: 12},
            {id: 3, post: 'Wazzup?', likesCount: 23},
        ]
    }

export const profileReducer = (state = initialState, action: PostActionType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                post: action.postText,
                likesCount: 0
            };
            // state.posts.unshift(newPost)
            // state.messageForNewPost = ''
            return {...state, posts: [newPost, ...state.posts], messageForNewPost: ''};
        case UPDATE_NEW_POST_TEXT:
            // state.messageForNewPost = action.newText
            return {...state, messageForNewPost: action.newText};
        default:
            return state;
    }
}

export type PostActionType = ReturnType<typeof addPostAC> | ReturnType<typeof updatePostAC>

export const addPostAC = (postText: string) => ({type: ADD_POST, postText: postText} as const)
export const updatePostAC = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText: newText} as const)