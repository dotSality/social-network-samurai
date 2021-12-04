import React from "react";
import {addPost, PostActionType, PostType, updatePost} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';

type MapStateToPropsType = {
    posts: PostType[]
    messageForNewPost: string
}

type MapDispatchToPropsType = {
    addPost: (postText: string) => void
    updateNewPostText: (text: string) => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost
    }
}

const mapDispatchToProps = (dispatch: (action: PostActionType) => void): MapDispatchToPropsType => {
    return {
        addPost: (postText: string) => {
            dispatch(addPost(postText))
        },
        updateNewPostText: (text: string) => {
            dispatch(updatePost(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)