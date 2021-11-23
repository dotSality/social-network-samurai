import React from "react";
import {addPostAC, PostActionType, PostType, ProfilePageType, updatePostAC} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

type MapStateToPropsType = {
    posts: PostType[]
    newMessageText: string
}

type MapDispatchToPropsType = {
    addPost: (state: ProfilePageType) => void
    updateNewPostText: (text: string) => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (props: ProfilePageType): MapStateToPropsType => {
    return {
        posts: props.posts,
        newMessageText: props.messageForNewPost
    }
}

const mapDispatchToProps = (dispatch: (action: PostActionType) => void): MapDispatchToPropsType => {
    return {
        addPost: (state: ProfilePageType) => {
            dispatch(addPostAC(state.messageForNewPost))
        },
        updateNewPostText: (text: string) => {
            dispatch(updatePostAC(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)