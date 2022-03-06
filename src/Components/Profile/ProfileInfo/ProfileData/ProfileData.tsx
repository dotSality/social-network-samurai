import React from 'react';
import {Contacts} from '../Contacts/Contacts';
import s from './ProfileData.module.css'
import {useAppSelector} from '../../../../bll/hooks';
import {Nullable} from '../../../../bll/profile-reducer';
import {ProfileType} from '../../Profile';

type ProfileDataPropsType = {
    isOwner: boolean
    onEditMode: () => void
    profile: ProfileType
}

export const ProfileData = ({isOwner, onEditMode, profile}: ProfileDataPropsType) => {

    return (
        <div className={s.container}>
            <div className={s.item}>
                <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob && <div className={s.item}>
                <b>My professional skills:</b> {profile.lookingForAJobDescription}
            </div>}
            <div className={s.item}>
                <b>Full name: </b>{profile.fullName}
            </div>
            {profile.aboutMe && <div className={s.item}>
                <b>About me: </b>{profile.aboutMe}
            </div>}
            <Contacts {...profile.contacts}/>
            {isOwner && <div className={s.item}>
                <button onClick={onEditMode}>Edit profile</button>
            </div>}
        </div>)
}