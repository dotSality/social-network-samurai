import React from "react";
import {addPostAC, PostActionType, PostType, updatePostAC} from '../../../redux/profile-reducer'
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


const mapStateToProps = (props: AppStateType): MapStateToPropsType => {
    return {
        posts: props.profilePage.posts,
        messageForNewPost: props.profilePage.messageForNewPost
    }
}

const mapDispatchToProps = (dispatch: (action: PostActionType) => void): MapDispatchToPropsType => {
    return {
        addPost: (postText: string) => {
            dispatch(addPostAC(postText))
        },
        updateNewPostText: (text: string) => {
            dispatch(updatePostAC(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)