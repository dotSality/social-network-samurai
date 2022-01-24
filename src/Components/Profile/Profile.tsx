import React from "react";
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfilePropsType} from './ProfileInfo/ProfileContainer';

type ProfileType = ProfilePropsType & {
    isOwner: boolean
}

const Profile = (props: ProfileType) => {
    return (
        <div className={s.mainCont}>
            <ProfileInfo uploadPhoto={props.uploadPhoto} isOwner={props.isOwner} status={props.status}
                updateUserStatus={props.updateUserStatus} profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;