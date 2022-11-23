import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import s from './Header.module.scss';
import logo from '../../common/Img/logo.svg';

import { HeaderUser } from './HeaderUser/HeaderUser';
import { useAppSelector } from '../../bll/hooks';
import { links } from '../../constants/header';

export const Header = () => {
  const isAuth = useAppSelector(state => state.auth.isAuth);

  const navigate = useNavigate();

  const onFeedNavigateHandler = () => navigate(isAuth ? '/news' : '/login');

  const linkClassName = ({ isActive }: { isActive: boolean }) => `${s.item} ${isActive ? s.active : ''}`;

  const headerLinks = links.map(({ icon, route, label }) => (
    <NavLink to={route} className={linkClassName}>
      <div style={{ backgroundImage: `url(${icon})` }} className={s.icon}/>
      {label}
    </NavLink>
  ));

  return <header className={s.headerContainer}>
    <div className={s.header}>
      <div onClick={onFeedNavigateHandler} className={s.logo} style={{ backgroundImage: `url(${logo})` }} role="presentation"/>
      <div className={s.links}>
        {isAuth && headerLinks}
      </div>
      {isAuth && <HeaderUser/>}
    </div>
  </header>;
};
