import React from "react";
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfilePropsType} from './ProfileInfo/ProfileContainer';

type ProfileType = ProfilePropsType & {
    isOwner: boolean
}

const Profile = ({authorizedUserId, uploadPhoto,
                     isOwner, status, submitProfile,
                     updateUserStatus, profile}: ProfileType) => {
    return (
        <div className={s.mainCont}>
            <ProfileInfo id={authorizedUserId!} uploadPhoto={uploadPhoto} isOwner={isOwner} status={status}
               submitProfile={submitProfile} updateUserStatus={updateUserStatus} profile={profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;