import React from 'react';
import s from './Friend.module.css'
import {FriendsItemType} from '../../../redux/state';

export function Friend (props: FriendsItemType) {
    return(
        <div className={s.friend}>
            <img
                src={props.avatar}
                alt={'avatar'}
            />{'\n'}
            <span className={s.name}>{props.name}</span>
        </div>
    )
}