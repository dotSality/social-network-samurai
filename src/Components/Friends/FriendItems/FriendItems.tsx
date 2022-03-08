import {useAppSelector} from '../../../bll/hooks';
import s from './FriendItems.module.scss';
import {Friend} from '../Friend/Friend';
import user from '../../../common/Img/user.svg';
import React from 'react';

export const FriendItems = () => {
    const {friends} = useAppSelector(state => state.sidebar)
    let friendItems = friends.map(({photos, name, id}) => {
        return <Friend key={id} id={id} avatar={photos.small || user} name={name}/>
    })

    return <div className={s.container}>
        {friendItems}
    </div>
}