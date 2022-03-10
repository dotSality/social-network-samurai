import React from 'react';
import s from './FriendsBlock.module.scss'
import {FriendItems} from './FriendItems/FriendItems';
import {useAppSelector} from '../../bll/hooks';

export function FriendsBlock() {

    const totalFriendsCount = useAppSelector(state => state.sidebar.totalFriendsCount)

    return (
        <div className={s.friends}>
            <span className={s.header}>Friends</span>
            {totalFriendsCount && <span className={s.count}>Total: {totalFriendsCount}</span>}
            <FriendItems/>
        </div>
    )
}