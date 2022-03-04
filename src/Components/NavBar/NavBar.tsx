import React from "react";
import {NavLink} from "react-router-dom";
import s from './NavBar.module.css'
import {Friends} from '../Friends/Friends';
import {useAppSelector} from '../../bll/hooks';

export const NavBar = () => {

    const {id} = useAppSelector(state => state.auth)
    const {friends} = useAppSelector(state => state.sidebar)
    const linkClassName = ({isActive}: { isActive: boolean }) => `${s.item} ${isActive ? s.activeLink : ''}`

    return (<nav className={s.nav}>
        <div className={s.mainNav}>
            <NavLink to={`/profile/${id}`} className={linkClassName}>Profile</NavLink>
            <NavLink to={'/dialogs'} className={linkClassName}>Messages</NavLink>
            <NavLink to={'/news'} className={linkClassName}>News</NavLink>
            <NavLink to={'/users'} className={linkClassName}>Users</NavLink>
            <NavLink to={'/music'} className={linkClassName}>Music</NavLink>
            <NavLink to={'/settings'} className={linkClassName}>Settings</NavLink>
        </div>
        <div>
            <Friends friends={friends}/>
        </div>
    </nav>)
}
