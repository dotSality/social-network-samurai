import { NavLink } from 'react-router-dom';
import userPhoto from '../../../common/Img/default-user.jpg';
import s from './UserItem.module.scss';
import React from 'react';
import { toggleFollow, UserType } from '../../../bll/users-reducer';
import { useAppDispatch, useAppSelector } from '../../../bll/hooks';
import CommonButton from '../../CommonUI/CommonButton/CommonButton';

type UserPropsType = {
  u: UserType
}

export const UserItem = ({ u }: UserPropsType) => {

  const dispatch = useAppDispatch();
  const { isFollowing } = useAppSelector(state => state.usersPage);
  const toggleFollowHandler = () => dispatch(toggleFollow({ userID: u.id, isFollowed: u.followed }));

  const isLoading = isFollowing.some(id => id === u.id);

  return (
    <div className={s.itemContainer}>
      <NavLink className={s.link} to={'/profile/' + u.id}>
        <img src={u.photos.small ? u.photos.small : userPhoto} className={s.userPhoto} alt={'user face'}/>
      </NavLink>
      <div className={s.data}>
        <span className={s.name}>
          <NavLink className={s.link} to={'/profile/' + u.id}>
            {u.name}
          </NavLink>
        </span>
        {u.status && <span className={s.status}>{u.status}</span>}
      </div>
      <CommonButton
        className={s.button}
        disabled={isLoading}
        loading={isLoading}
        onClick={toggleFollowHandler}
      >
        {!u.followed ? 'Follow' : 'Unfollow'}
      </CommonButton>
    </div>
  );
};