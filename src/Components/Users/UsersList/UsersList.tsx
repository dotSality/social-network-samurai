import s from './UsersList.module.scss';
import {InnerPreloader} from '../../InnerPreloader/InnerPreloader';
import {UserItem} from '../UserItem/UserItem';
import React, {memo} from 'react';
import {useAppSelector} from '../../../bll/hooks';
import {usersData} from '../../../bll/selectors';

type PropsType = {
    isScrolled: boolean
}

export const UsersList = memo(({isScrolled}: PropsType) => {

    const {users, isFetching} = useAppSelector(usersData)

    const contentClassName = `${s.content} ${isScrolled && s.scrolled}`

    return (
        <div className={contentClassName}>
            {isFetching
                ? <InnerPreloader/>
                : users.map(u => <UserItem key={u.id} u={u}/>)}
        </div>
    )
})