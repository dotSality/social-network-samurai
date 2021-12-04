import React from 'react';
import s from './Users.module.css';
import userPhoto from './Img/default-user.jpg'
import {UserType} from '../../redux/users-reducer';

type PresentUsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
    toggleFollow: (id: number) => void
    users: UserType[]
}

export const Users = (props: PresentUsersPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(i => <button onClick={() => props.onPageChanged(i)}
                className={props.currentPage === i ? s.selected : ''}>{i}</button>)}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small ? u.photos.small : userPhoto} className={s.userPhoto}/>
                    </div>
                    <div>
                        <button onClick={() => props.toggleFollow(u.id)}>{u.followed ? 'Follow' : 'Unfollow'}</button>
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}






































