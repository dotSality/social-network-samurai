import React from 'react';
import s from './Users.module.css';
import userPhoto from './Img/default-user.jpg'
import {UserType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';
import {Pagination} from './Pagination';

type PresentUsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
    toggleFollow: (userID: number, isFollowed: boolean) => void
    users: UserType[]
    isFollowing: number[]
}

export const Users = (props: PresentUsersPropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)



    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <Pagination
            pagesCount={pagesCount}
            onPageChanged={props.onPageChanged}
            currentPage={props.currentPage}/>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small ? u.photos.small : userPhoto} className={s.userPhoto} alt={'user face'}/>
                        </NavLink>
                    </div>
                    <div>
                        <button disabled={props.isFollowing.some(id => id === u.id)}
                            onClick={() => props.toggleFollow(u.id, u.followed)}>{!u.followed ? 'Follow' : 'Unfollow'}</button>
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



































