import React, {ChangeEvent} from "react";
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
    isOwner: boolean
    uploadPhoto: (file: File | null) => void
}

const ProfileInfo = ({status, profile, updateUserStatus, isOwner, uploadPhoto}: ProfileInfoPropsType) => {

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelect = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files!.length) uploadPhoto(e.target.files![0])
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} alt={'profile owner'}/>
                {isOwner && <input onChange={onMainPhotoSelect} type={'file'}/>}
            </div>
            <div>
                <div>
                    <ProfileStatus updateUserStatus={updateUserStatus} status={status}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;