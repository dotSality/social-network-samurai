import React from 'react';
import s from './Friends.module.scss'
import {FriendItems} from './FriendItems/FriendItems';

export function Friends() {

    return (
        <div className={s.friends}>
            <span className={s.header}>Your friends</span>
            <FriendItems/>
        </div>
    )
}