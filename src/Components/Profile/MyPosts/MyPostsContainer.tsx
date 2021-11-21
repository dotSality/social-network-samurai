import React from "react";
import {addPostAC, updatePostAC} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';
import {StoreType} from '../../../redux/store';
import {StoreContext} from '../../../StoreContext'

// export type MyPostsContainerType = {
//     store: StoreType
// }

export const MyPostsContainer = () => {

    // const state = props.store.getState()

    // const addPost = () => {
    //     props.store.dispatch(addPostAC(state.profilePage.messageForNewPost))
    // }
    //
    // const updateNewPostText = (text: string) => {
    //     props.store.dispatch(updatePostAC(text))
    // }

    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState()

                const addPost = () => {
                    store.dispatch(addPostAC(state.profilePage.messageForNewPost))
                }

                const updateNewPostText = (text: string) => {
                    store.dispatch(updatePostAC(text))
                }

                return <MyPosts
                    messageForNewPost={state.profilePage.messageForNewPost}
                    posts={state.profilePage.posts}
                    updateNewPostText={updateNewPostText}
                    addPost={addPost}
                />
            }}
        </StoreContext.Consumer>
    )
}