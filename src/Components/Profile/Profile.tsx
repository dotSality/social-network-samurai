import React from "react";
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostActionType, PostType} from '../../redux/state';


type ProfilePropsType = {
    MyPostsPropsType: Array<PostType>
    dispatch: (action: PostActionType) => void
    messageForNewPost: string
}



const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.mainCont}>
            <ProfileInfo/>
            <MyPosts
                dispatch={props.dispatch}
                PostsPropsType={props.MyPostsPropsType}
                messageForNewPost={props.messageForNewPost}
            />
        </div>
    )
}

export default Profile;