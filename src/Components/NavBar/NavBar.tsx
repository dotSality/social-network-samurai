import React from "react";
import s from './NavBar.module.css'
import {FriendsBlock} from '../FriendsBlock/FriendsBlock';

export const NavBar = () => {

    return (<div className={s.nav}>
            <FriendsBlock/>
    </div>)
}
