import React from "react";
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostType} from '../../redux/state';


type ProfilePropsType = {
    MyPostsPropsType: Array<PostType>
}



const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.mainCont}>
            <ProfileInfo/>
            <MyPosts PostsPropsType={props.MyPostsPropsType}/>
        </div>
    )
}

export default Profile;