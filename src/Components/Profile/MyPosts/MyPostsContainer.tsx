import {addPost, PostType} from '../../../bll/profile-reducer'
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {RootStateType} from '../../../bll/store';

type MapStateToPropsType = {
    posts: PostType[]
}

type MapDispatchToPropsType = {
    addPost: (postText: string) => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
}

export const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)