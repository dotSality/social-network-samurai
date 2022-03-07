import React from "react";
import s from './NavBar.module.css'
import {Friends} from '../Friends/Friends';

export const NavBar = () => {

    return (<nav className={s.nav}>
            <Friends/>
    </nav>)
}
