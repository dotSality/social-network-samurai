import React, {ChangeEvent, useState} from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileType} from './ProfileContainer';
import {ProfileStatus} from './ProfileStatus';
import {Nullable} from '../../../redux/profile-reducer';
import userPhoto from './../../common/Img/default-user.jpg';
import {ProfileData} from './ProfileData/ProfileData';
import {ProfileDataForm, ProfileDataType} from './ProfileDataForm/ProfileDataForm';

type ProfileInfoPropsType = {
    status: string
    profile: Nullable<ProfileType>
    updateUserStatus: (status: string) => void
    isOwner: boolean
    uploadPhoto: (file: File | null) => void
    submitProfile: (profile: ProfileDataType) => void
}

const ProfileInfo = ({status, profile, updateUserStatus, isOwner, uploadPhoto, submitProfile}: ProfileInfoPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [hover, setHover] = useState<boolean>(false)

    if (!profile) {
        return <Preloader/>
    }

    const onEditMode = () => setEditMode(true)
    const offEditMode = () => setEditMode(false)

    const onHover = () => setHover(true)
    const offHover = () => setHover(false)

    const onMainPhotoSelect = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files!.length) uploadPhoto(e.target.files![0])
    }

    const onSubmit = (data: ProfileDataType) => submitProfile(data)

    const activeClassName = `${s.status} ${isOwner && hover ? s.active : ''}`

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} alt={'profile owner'}/>
                {isOwner && <input onChange={onMainPhotoSelect} type={'file'}/>}
            </div>
            <div>
                <div onMouseEnter={onHover} onMouseLeave={offHover} className={activeClassName}>{isOwner ?
                    <ProfileStatus updateUserStatus={updateUserStatus} status={status}/>
                    : (status ? status : 'no status')}
                </div>
            </div>
            {editMode ? <ProfileDataForm profile={profile} onSubmit={onSubmit} offEditMode={offEditMode}/>
                : <ProfileData onEditMode={onEditMode} isOwner={isOwner} profile={profile}/>}
        </div>
    )
}

export default ProfileInfo;