import React from "react";
import s from './NavBar.module.css'
import {Friends} from '../Friends/Friends';

export const NavBar = () => {

    return (<div className={s.nav}>
            <Friends/>
    </div>)
}
