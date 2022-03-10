import React, {useState} from "react";
import {Nullable, submitProfile} from '../../../bll/profile-reducer';
import {ProfileData} from './ProfileData/ProfileData';
import {ProfileDataForm, ProfileDataType} from './ProfileDataForm/ProfileDataForm';
import {useAppDispatch, useAppSelector} from '../../../bll/hooks';
import {ProfileType} from '../Profile';
import {Avatar} from '../Avatar/Avatar';
import {MyPosts} from '../MyPosts/MyPosts';
import s from './ProfileInfo.module.scss';
import {FriendsBlock} from '../../FriendsBlock/FriendsBlock';

type PropsType = {
    isOwner: boolean
    profile: Nullable<ProfileType>
    status: Nullable<string>
}

export const ProfileInfo = ({isOwner, profile}: PropsType) => {

    const {error} = useAppSelector(state => state.app)
    const [editMode, setEditMode] = useState<boolean>(false)
    const dispatch = useAppDispatch()

    const onEditMode = () => setEditMode(true)

    const onSubmit = (data: ProfileDataType) => {
        setEditMode(false)
        dispatch(submitProfile(data))
    }

    const rightContainerClassName = `${s.rightContainer}`
    const leftContainerClassName = `${s.leftContainer}`

    return (
        <div className={s.profileInfoContainer}>
            <div className={leftContainerClassName}>
                <div className={s.container}>
                    <Avatar avatar={profile!.photos.large} isOwner={isOwner}/>
                </div>
                <div className={s.container}>
                    <FriendsBlock/>
                </div>
            </div>

            <div className={rightContainerClassName}>
                <div className={s.container}>
                    {editMode ? <ProfileDataForm error={error} onSubmit={onSubmit}/>
                        : <ProfileData profile={profile!} onEditMode={onEditMode} isOwner={isOwner}/>}
                </div>
                <div className={s.container}>
                    <MyPosts/>
                </div>
            </div>
        </div>
    )
}
