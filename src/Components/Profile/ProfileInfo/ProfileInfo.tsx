import React from "react";
import { Nullable } from '../../../bll/profile-reducer';
import { ProfileData } from './ProfileData/ProfileData';
import { ProfileType } from '../Profile';
import { Avatar } from '../Avatar/Avatar';
import s from './ProfileInfo.module.scss';
import { FriendsBlock } from '../../FriendsBlock/FriendsBlock';

type PropsType = {
  isOwner: boolean
  profile: Nullable<ProfileType>
  status: Nullable<string>
}

export const ProfileInfo = ({ isOwner, profile }: PropsType) => {
  const rightContainerClassName = `${s.rightContainer}`;
  const leftContainerClassName = `${s.leftContainer}`;

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
          <ProfileData profile={profile!} isOwner={isOwner}/>
        </div>
        {/*<div className={s.container}>
         <MyPosts/>
         </div>*/}
      </div>
    </div>
  );
};
