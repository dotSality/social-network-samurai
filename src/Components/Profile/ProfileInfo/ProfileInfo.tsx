import React, {ChangeEvent, useState} from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileStatus} from './ProfileStatus';
import {submitProfile, uploadPhoto} from '../../../bll/profile-reducer';
import userPhoto from './../../common/Img/default-user.jpg';
import {ProfileData} from './ProfileData/ProfileData';
import {ProfileDataForm, ProfileDataType} from './ProfileDataForm/ProfileDataForm';
import {useAppDispatch, useAppSelector} from '../../../bll/hooks';
import {setEditMode} from '../../../bll/form-reducer';

type PropsType = {
    isOwner: boolean
}

export const ProfileInfo = ({isOwner}: PropsType) => {

    const {profile, status} = useAppSelector(state => state.profilePage)
    const {editMode, error} = useAppSelector(state => state.form)
    const dispatch = useAppDispatch()
    const [hover, setHover] = useState<boolean>(false)

    const onEditMode = () => dispatch(setEditMode(true))
    const onHover = () => setHover(true)
    const offHover = () => setHover(false)

    const onMainPhotoSelect = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files!.length) dispatch(uploadPhoto(e.target.files![0]))
    }

    const onSubmit = (data: ProfileDataType) => dispatch(submitProfile(data))

    const activeClassName = `${s.status} ${isOwner && hover ? s.active : ''}`

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} alt={'profile owner'}/>
                {isOwner && <input onChange={onMainPhotoSelect} type={'file'}/>}
            </div>
            <div>
                <div onMouseEnter={onHover} onMouseLeave={offHover} className={activeClassName}>
                    {isOwner
                        ? <ProfileStatus/>
                        : (status ? status : 'no status')}
                </div>
            </div>
            {editMode ? <ProfileDataForm error={error} onSubmit={onSubmit}/>
                : <ProfileData onEditMode={onEditMode} isOwner={isOwner}/>}
        </div>
    )
}
