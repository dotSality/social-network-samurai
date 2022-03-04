import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import {useAppDispatch, useAppSelector} from '../../bll/hooks';
import {logout} from '../../bll/auth-reducer';

export const Header = () => {

    const dispatch = useAppDispatch()
    const {isAuth,login} = useAppSelector(state => state.auth)

    const logoutHandler = () => dispatch(logout())

    return <header className={s.header}>
        <img src='https://i.ibb.co/kDDBfBd/pngtree-abstract-wave-business-logo-png-image-736975.jpg' alt={'header img'}/>
        <div className={s.loginBlock}>
            {isAuth ? <div>{login} - <button onClick={logoutHandler}>Logout</button></div> :
            <NavLink to={'/login/'}>Login</NavLink>}
        </div>
    </header>
}
