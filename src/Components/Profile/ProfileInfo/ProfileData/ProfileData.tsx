import React from 'react';
import {Contacts} from '../Contacts/Contacts';
import s from './ProfileData.module.css'
import {useAppSelector} from '../../../../bll/hooks';
import {Nullable} from '../../../../bll/profile-reducer';
import {ProfileType} from '../../Profile';
import {ProfileStatus} from '../ProfileStatus/ProfileStatus';

type ProfileDataPropsType = {
    isOwner: boolean
    onEditMode: () => void
    profile: ProfileType
}

export const ProfileData = ({isOwner, onEditMode, profile}: ProfileDataPropsType) => {

    const {contacts, aboutMe, lookingForAJob, lookingForAJobDescription, fullName} = profile

    return (
        <div className={s.container}>
            <div style={{fontSize: "28px"}} className={s.item}>
                <b>{fullName}</b>
            </div>
            <ProfileStatus isOwner={isOwner}/>
            <div className={s.item}>
                <b>Looking for a job:</b> {lookingForAJob ? 'yes' : 'no'}
            </div>
            {lookingForAJob && <div className={s.item}>
                <b>My professional skills:</b> {lookingForAJobDescription}
            </div>}
            <div className={s.item}>
                <b>Full name: </b>{fullName}
            </div>
            {aboutMe && <div className={s.item}>
                <b>About me: </b>{aboutMe}
            </div>}
            <Contacts {...contacts}/>
            {isOwner && <div className={s.item}>
                <button onClick={onEditMode}>Edit profile</button>
            </div>}
        </div>)
}