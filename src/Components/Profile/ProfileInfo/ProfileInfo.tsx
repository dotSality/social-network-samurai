import React from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileType} from './ProfileContainer';
import {ProfileStatus} from './ProfileStatus';
import {Nullable} from '../../../redux/profile-reducer';
import userPhoto from './../../common/Img/default-user.jpg';

type ProfileInfoPropsType = {
    status: string
    profile: Nullable<ProfileType>
    updateUserStatus: (status: string)=> void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    className={s.img}
                    src='https://c4.wallpaperflare.com/wallpaper/784/819/740/ultra-wide-photography-beach-wallpaper-preview.jpg'
                    alt={'avatar'}
                />
                <div>
                    <ProfileStatus updateUserStatus={props.updateUserStatus} status={props.status}/>
                </div>
            </div>
            <div className={s.descriptionBlock}>
                {<img src={props.profile.photos.large || userPhoto} alt={'profile owner'}/>}
            </div>
        </div>
    )
}

export default ProfileInfo;