import {NavLink} from 'react-router-dom';
import userPhoto from '../../../common/Img/default-user.jpg';
import s from './UserItem.module.scss';
import React from 'react';
import {toggleFollow, UserType} from '../../../bll/users-reducer';
import {useAppDispatch, useAppSelector} from '../../../bll/hooks';


type UserPropsType = {
    u: UserType
}

export const UserItem = ({u}: UserPropsType) => {

    const dispatch = useAppDispatch()
    const {isFollowing} = useAppSelector(state => state.usersPage)
    const toggleFollowHandler = () => dispatch(toggleFollow({userID: u.id, isFollowed: u.followed}))

    return (
        <div className={s.itemContainer}>
            <NavLink className={s.link} to={'/profile/' + u.id}>
                <div>
                    <img src={u.photos.small ? u.photos.small : userPhoto} className={s.userPhoto} alt={'user face'}/>
                </div>
            </NavLink>
            <div className={s.data}>
                    <span className={s.name}>
                        <NavLink className={s.link} to={'/profile/' + u.id}>
                            {u.name}
                        </NavLink>
                    </span>
                {u.status && <span className={s.status}>{u.status}</span>}
            </div>

            <div>
                <button disabled={isFollowing.some(id => id === u.id)}
                    onClick={toggleFollowHandler}>{!u.followed ? 'Follow' : 'Unfollow'}</button>
            </div>
        </div>
    )
}