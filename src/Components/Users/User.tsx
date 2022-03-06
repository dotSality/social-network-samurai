import {NavLink} from 'react-router-dom';
import userPhoto from '../../common/Img/default-user.jpg';
import s from './Users.module.scss';
import React from 'react';
import {toggleFollow, UserType} from '../../bll/users-reducer';
import {useAppDispatch, useAppSelector} from '../../bll/hooks';


type UserPropsType = {
    u: UserType
}

export const User = ({u}: UserPropsType) => {

    const dispatch = useAppDispatch()
    const {isFollowing} = useAppSelector(state => state.usersPage)
    const toggleFollowHandler = () => dispatch(toggleFollow({userID: u.id, isFollowed: u.followed}))

    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small ? u.photos.small : userPhoto} className={s.userPhoto} alt={'user face'}/>
                    </NavLink>
                </div>
                <div>
                    <button disabled={isFollowing.some(id => id === u.id)}
                        onClick={toggleFollowHandler}>{!u.followed ? 'Follow' : 'Unfollow'}</button>
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
            </span>
        </div>
    )
}