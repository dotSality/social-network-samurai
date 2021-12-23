import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import {HeaderPropsType} from './HeaderContainer';

const Header = (props: HeaderPropsType) => {
    return <header className={s.header}>
        <img src='https://i.ibb.co/kDDBfBd/pngtree-abstract-wave-business-logo-png-image-736975.jpg' alt={'header img'}/>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login :
            <NavLink to={'/login/'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;