import React, {useEffect} from 'react';
import s from './Friends.module.css'
import {Friend} from './Friend/Friend';
import {useAppDispatch, useAppSelector} from '../../bll/hooks';
import user from '../../common/Img/user.svg';

export function Friends() {

    const {friends} = useAppSelector(state => state.sidebar)
    let friendItems = friends.map(({photos, name, id}) => {
        return <Friend key={id} id={id} avatar={photos.small || user} name={name}/>
    })
    return (
        <div className={s.friendsCont}>
            <span className={s.header}>Friends</span>
            {friendItems}
        </div>
    )
}