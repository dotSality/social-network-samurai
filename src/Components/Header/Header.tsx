import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.scss';
import {useAppSelector} from '../../bll/hooks';
import {HeaderUser} from './HeaderUser/HeaderUser';

export const Header = () => {

    const linkClassName = ({isActive}: { isActive: boolean }) => `${s.item} ${isActive ? s.active : ''}`
    return <header className={s.header}>
        <img src='https://i.ibb.co/kDDBfBd/pngtree-abstract-wave-business-logo-png-image-736975.jpg' alt={'header img'}/>
        <div className={s.links}>
            <NavLink to={`/`} className={linkClassName}>Home</NavLink>
            <NavLink to={'/dialogs'} className={linkClassName}>Messages</NavLink>
            <NavLink to={'/news'} className={linkClassName}>News</NavLink>
            <NavLink to={'/users'} className={linkClassName}>Users</NavLink>
            <NavLink to={'/music'} className={linkClassName}>Music</NavLink>
        </div>
        <HeaderUser/>
    </header>
}
