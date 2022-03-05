import {addPost, deletePost, PostType, profileReducer} from './profile-reducer';

let state: any;

beforeEach(() => {
    state = {
        posts: [
            {id: 1, post: 'Hi', likesCount: 15},
            {id: 2, post: 'Yo!', likesCount: 12},
            {id: 3, post: 'Wazzup?', likesCount: 23},
        ] as PostType[],
        profile: null,
        status: '',
    }
})

test('only new post should be added', () => {
    // 1. Test data
    const postText = 'message'
    const action = addPost(postText)
    // 2. Some action
    let newState = profileReducer(state, action)
    // 3. Expecting result
    expect(newState.posts.length).toBe(4)
    expect(newState.posts[0].post).toBe(postText)
    expect(newState.posts[0].likesCount).toBe(0)
    expect(newState.profile).toStrictEqual(state.profile)
    expect(newState.status).toStrictEqual(state.status)
})

test('after post deleting posts length should be decremented', () => {
    // 1. Test data
    const action = deletePost(2)
    // 2. Some action
    let newState = profileReducer(state, action)
    // 3. Expecting result
    expect(newState.posts.length).toBe(2);
    expect(newState.posts[2]).toBeUndefined()
})

test('after post deleting posts length should not be decremented with wrong id', () => {
    // 1. Test data
    const action = deletePost(5)
    // 2. Some action
    let newState = profileReducer(state, action)
    // 3. Expecting result
    expect(newState.posts.length).toBe(3);
    expect(newState.posts[2]).toBeDefined()
})