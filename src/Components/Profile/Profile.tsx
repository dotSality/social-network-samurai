import React, {useEffect} from "react";
import {clearProfileData, getUserStatus, loadUserProfile} from '../../bll/profile-reducer';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../bll/hooks';
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPosts} from './MyPosts/MyPosts';
import {WithAuthRedirect} from '../../HOC/WithAuthRedirect';
import {InnerPreloader} from '../InnerPreloader/InnerPreloader';

export type ContactsType = {
    facebook: string | null,
    website: string | null,
    vk: string | null,
    twitter: string | null,
    instagram: string | null,
    youtube: string | null,
    github: string | null,
    mainLink: string | null
}

type PhotosType = {
    small: string | null,
    large: string | null
}
export type ProfileType = {
    aboutMe: string | null,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string,
    userId: number,
    photos: PhotosType,
}

export default WithAuthRedirect(() => {

    const {userId} = useParams()
    const dispatch = useAppDispatch()
    const {profile, status} = useAppSelector(state => state.profilePage)
    useEffect(() => {
        fetchProfile()
        return () => {
            dispatch(clearProfileData())
        }
    }, [userId])

    const fetchProfile = () => {
        if (userId) {
            let id = +userId
            dispatch(loadUserProfile(id))
            dispatch(getUserStatus(id))
        }
    }

    if (!profile) {
        return <InnerPreloader/>
    }

    return (
        <div className={s.mainCont}>
            <ProfileInfo status={status} profile={profile} isOwner={false}/>
        </div>
    )
})
