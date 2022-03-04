import React from 'react';
import s from './Friends.module.css'
import {FriendsItemType} from '../../bll/sidebar-reducer';
import {Friend} from './Friend/Friend';

type FriendsPropsType = {
    friends: FriendsItemType[]
}

export function Friends (props: FriendsPropsType) {
    let friendItems = props.friends.map(f => <Friend key={f.id} id={f.id} avatar={f.avatar} name={f.name}/>)
    return(
        <div className={s.friendsCont}>
            <span className={s.header}>Friends</span>
            {friendItems}
        </div>
    )
}