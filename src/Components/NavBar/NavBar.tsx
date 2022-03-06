import React from "react";
import s from './NavBar.module.css'
import {Friends} from '../Friends/Friends';
import {useAppSelector} from '../../bll/hooks';

export const NavBar = () => {

    const {friends} = useAppSelector(state => state.sidebar)

    return (<nav className={s.nav}>
            <Friends friends={friends}/>
    </nav>)
}
