import React, {ChangeEvent, useState} from "react";
import s from './ProfileInfo.module.css'
import {ProfileStatus} from './ProfileStatus';
import {Nullable, submitProfile, uploadPhoto} from '../../../bll/profile-reducer';
import userPhoto from './../../../common/Img/default-user.jpg';
import {ProfileData} from './ProfileData/ProfileData';
import {ProfileDataForm, ProfileDataType} from './ProfileDataForm/ProfileDataForm';
import {useAppDispatch, useAppSelector} from '../../../bll/hooks';
import {ProfileType} from '../Profile';

type PropsType = {
    isOwner: boolean
    profile: Nullable<ProfileType>
    status: Nullable<string>
}

export const ProfileInfo = ({isOwner, profile, status}: PropsType) => {

    // const {profile, status} = useAppSelector(state => state.profilePage)
    const {error} = useAppSelector(state => state.app)
    const [editMode, setEditMode] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const [hover, setHover] = useState<boolean>(false)

    const onEditMode = () => setEditMode(true)
    const onHover = () => setHover(true)
    const offHover = () => setHover(false)

    const onMainPhotoSelect = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files!.length) dispatch(uploadPhoto(e.target.files![0]))
    }

    const onSubmit = (data: ProfileDataType) => {
        setEditMode(false)
        dispatch(submitProfile(data))
    }

    const activeClassName = `${s.status} ${isOwner && hover ? s.active : ''}`

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile?.photos.large || userPhoto} alt={'profile owner'}/>
                {isOwner && <input onChange={onMainPhotoSelect} type={'file'}/>}
            </div>
            <div>
                <div onMouseEnter={onHover} onMouseLeave={offHover} className={activeClassName}>
                    {isOwner
                        ? <ProfileStatus/>
                        : (status ? status : 'no status')}
                </div>
            </div>
            <>
                {editMode ? <ProfileDataForm error={error} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile!} onEditMode={onEditMode} isOwner={isOwner}/>}
            </>
        </div>
    )
}
