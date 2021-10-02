import React from "react";
import s from './NavBar.module.css'

/*let s = {
    'nav': 'NavBar_nav__2Q_l4',
    'item': 'NavBar_item__u5y3L',
     'active': 'EVE_actveCEfvrv'
}
let c1 = 'item';
let c2 = 'active';
// 'item active'
let classes = c1 + ' ' + c2;
let classes = `${s.item} ${c2}`;*/



console.log(s);
const NavBar = () => {
    return (<nav className={s.nav}>
        <div className={s.item}>
            <a>Profile</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <a>Messages</a>
        </div>
        <div className={s.item}>
            <a>News</a>
        </div>
        <div className={s.item}>
            <a>Music</a>
        </div>
        <div className={s.item}>
            <a>Settings</a>
        </div>
    </nav>)
}

export default NavBar;