import React from 'react';
import {UserType} from '../../redux/users-reducer';
import {Pagination} from './Pagination';
import {User} from './User';

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
        <Pagination pagesCount={pagesCount}
            onPageChanged={props.onPageChanged}
            currentPage={props.currentPage}/>
        {
            props.users.map(u => <User key={u.id} u={u}
                isFollowing={props.isFollowing}
                toggleFollow={props.toggleFollow}/>)
        }
    </div>
}



































