import { memo, useCallback } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../../bll/auth-reducer';
import { useAppDispatch, useAppSelector } from '../../../bll/hooks';
import { MenuPopup } from '../../CommonUI/MenuPopup/MenuPopup';
import s from './HeaderUser.module.scss';
import defaultAvatar from '../../../common/Img/user.svg';

export const HeaderUser = memo(() => {

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { isAuth, authProfile } = useAppSelector(state => state.auth);

  const logoutHandler = useCallback(async () => {
    await dispatch(logout());
    navigate('/login');
  }, [dispatch, navigate]);

  const userMenuItems = [
    {
      key: '1', label: <Link to="/"> Profile</Link>
    },
    {
      key: '2', label: <Link to="/settings">Settings</Link>
    },
    {
      key: '3', label: <div onClick={logoutHandler}>Logout</div>
    },
  ];

  return (
    <div className={s.main}>
      {isAuth ?
        <MenuPopup items={userMenuItems}>
          <div className={s.loggedUser}>
            <img className={s.avatar} src={authProfile!.photos.small || defaultAvatar} alt="avatar"/>
            <span className={s.name}>{authProfile?.fullName ?? 'Sample text'}</span>
          </div>
        </MenuPopup>
        : <NavLink className={s.link} to={'/login'}>
          Login
        </NavLink>
      }
    </div>
  );
});