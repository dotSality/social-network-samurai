import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.scss';
import logo from '../../common/Img/logo.svg';

import {HeaderUser} from './HeaderUser/HeaderUser';

export const Header = () => {

    const linkClassName = ({isActive}: { isActive: boolean }) => `${s.item} ${isActive ? s.active : ''}`
    return <header className={s.header}>
        <div className={s.logo} style={{backgroundImage: `url(${logo})`}} role="presentation"/>
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
