import React from "react";
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfilePropsType} from './ProfileInfo/ProfileContainer';

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.mainCont}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;