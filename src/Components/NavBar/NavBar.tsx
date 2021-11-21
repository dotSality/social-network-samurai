import React from "react";
import {NavLink} from "react-router-dom";
import s from './NavBar.module.css'
import {Friends} from '../Friends/Friends';
import {SidebarType} from '../../redux/store';
import {StoreContext} from '../../StoreContext';

const NavBar = () => {

    return <StoreContext.Consumer>
        {(store) => {

            const state = store.getState()

            return (<nav className={s.nav}>
                <div className={s.mainNav}>
                    <div className={s.item}>
                        <NavLink to={'/profile'} activeClassName={s.activeLink}>Profile</NavLink>
                    </div>
                    <div className={`${s.item} ${s.active}`}>
                        <NavLink to={'/dialogs'} activeClassName={s.activeLink}>Messages</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to={'/news'} activeClassName={s.activeLink}>News</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to={'/music'} activeClassName={s.activeLink}>Music</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to={'/settings'} activeClassName={s.activeLink}>Settings</NavLink>
                    </div>
                </div>
                <div>
                    <Friends friends={state.sidebar.friends}/>
                </div>
            </nav>)
        }
        }
    </StoreContext.Consumer>
}

export default NavBar;