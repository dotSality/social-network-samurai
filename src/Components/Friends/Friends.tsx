import React from 'react';
import s from './Friends.module.css'
import {SidebarType, FriendsItemType} from '../../redux/store';
import {Friend} from './Friend/Friend';

export function Friends (props: SidebarType) {
    let friendItems = props.friends.map(f => <Friend avatar={f.avatar} name={f.name}/>)
    return(
        <div className={s.friendsCont}>
            <span className={s.header}>Friends</span>
            {friendItems}
        </div>
    )
}