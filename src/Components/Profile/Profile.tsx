import React from "react";
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {StoreType} from '../../redux/store';

// type ProfilePropsType = {
//     store: StoreType
// }

const Profile = () => {
    return (
        <div className={s.mainCont}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;