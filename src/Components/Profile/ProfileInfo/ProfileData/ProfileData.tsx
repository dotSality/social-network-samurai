import React from 'react';
import {Contacts} from '../Contacts/Contacts';
import s from './ProfileData.module.css'
import {useAppSelector} from '../../../../bll/hooks';

type ProfileDataPropsType = {
    isOwner: boolean
    onEditMode: () => void
}

export const ProfileData = ({isOwner, onEditMode}: ProfileDataPropsType) => {

    const profile = useAppSelector(state => state.profilePage.profile!)

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