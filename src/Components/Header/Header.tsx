import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import s from './Header.module.scss';
import logo from '../../common/Img/logo.svg';

import {HeaderUser} from './HeaderUser/HeaderUser';
import {linksImages} from '../../common/Img/links/linksImages';

export const Header = () => {
    const {news, music, home, users, message} = linksImages
    const navigate = useNavigate()
    const onFeedNavigateHandler = () => navigate('/news')
    const linkClassName = ({isActive}: { isActive: boolean }) => `${s.item} ${isActive ? s.active : ''}`
    return <header className={s.headerContainer}>
        <div className={s.header}>
            <div onClick={onFeedNavigateHandler} className={s.logo} style={{backgroundImage: `url(${logo})`}} role="presentation"/>
            <div className={s.links}>
                <NavLink to={`/`} className={linkClassName}>
                    <div style={{backgroundImage: `url(${home})`}} className={s.icon}/>
                    Home
                </NavLink>
                <NavLink to={'/dialogs'} className={linkClassName}>
                    <div style={{backgroundImage: `url(${message})`}} className={s.icon}/>
                    Messages
                </NavLink>
                <NavLink to={'/news'} className={linkClassName}>
                    <div style={{backgroundImage: `url(${news})`}} className={s.icon}/>
                    News
                </NavLink>
                <NavLink to={'/users'} className={linkClassName}>
                    <div style={{backgroundImage: `url(${users})`}} className={s.icon}/>
                    Users
                </NavLink>
                <NavLink to={'/music'} className={linkClassName}>
                    <div style={{backgroundImage: `url(${music})`}} className={s.icon}/>
                    Music
                </NavLink>
            </div>
            <HeaderUser/>
        </div>
    </header>
}
