import {NavLink} from 'react-router-dom';
import userPhoto from './Img/default-user.jpg';
import s from './Users.module.css';
import React from 'react';
import {UserType} from '../../redux/users-reducer';


type UserPropsType = {
    u: UserType
    isFollowing: number[]
    toggleFollow: (id: number, isFollowed: boolean) => void
}

export const User = (props: UserPropsType) => {
    return (
        <div key={props.u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + props.u.id}>
                        <img src={props.u.photos.small ? props.u.photos.small : userPhoto} className={s.userPhoto} alt={'user face'}/>
                        </NavLink>
                    </div>
                    <div>
                        <button disabled={props.isFollowing.some(id => id === props.u.id)}
                            onClick={() => props.toggleFollow(props.u.id, props.u.followed)}>{!props.u.followed ? 'Follow' : 'Unfollow'}</button>
                    </div>
                </span>
            <span>
                    <span>
                        <div>{props.u.name}</div>
                        <div>{props.u.status}</div>
                    </span>
                </span>
        </div>
    )
}