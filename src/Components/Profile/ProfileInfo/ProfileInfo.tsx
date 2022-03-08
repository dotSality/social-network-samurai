import React, {useState} from "react";
import {Nullable, submitProfile} from '../../../bll/profile-reducer';
import {ProfileData} from './ProfileData/ProfileData';
import {ProfileDataForm, ProfileDataType} from './ProfileDataForm/ProfileDataForm';
import {useAppDispatch, useAppSelector} from '../../../bll/hooks';
import {ProfileType} from '../Profile';
import {Avatar} from '../Avatar/Avatar';
import {ProfileStatus} from './ProfileStatus/ProfileStatus';
import {MyPosts} from '../MyPosts/MyPosts';

type PropsType = {
    isOwner: boolean
    profile: Nullable<ProfileType>
    status: Nullable<string>
}

export const ProfileInfo = ({isOwner, profile, status}: PropsType) => {

    const {error} = useAppSelector(state => state.app)
    const [editMode, setEditMode] = useState<boolean>(false)
    const dispatch = useAppDispatch()

    const onEditMode = () => setEditMode(true)

    const onSubmit = (data: ProfileDataType) => {
        setEditMode(false)
        dispatch(submitProfile(data))
    }

    return (
        <div>
            <Avatar avatar={profile!.photos.large} isOwner={isOwner}/>
            <ProfileStatus isOwner={isOwner}/>
            {editMode ? <ProfileDataForm error={error} onSubmit={onSubmit}/>
                : <ProfileData profile={profile!} onEditMode={onEditMode} isOwner={isOwner}/>}
            <MyPosts/>
        </div>
    )
}
