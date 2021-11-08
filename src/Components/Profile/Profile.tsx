import React from "react";
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostType} from '../../redux/state';


type ProfilePropsType = {
    MyPostsPropsType: Array<PostType>
    addPost: () => void
    messageForNewPost: string
    updateNewPostText: (newText: string) => void
}



const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.mainCont}>
            <ProfileInfo/>
            <MyPosts
                addPost={props.addPost}
                PostsPropsType={props.MyPostsPropsType}
                messageForNewPost={props.messageForNewPost}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

export default Profile;