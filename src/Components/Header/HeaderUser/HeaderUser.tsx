import {useEffect, useState, MouseEvent} from 'react';
import arrow from '../../../common/Img/user-menu-arrow.svg';
import {useAppDispatch, useAppSelector} from '../../../bll/hooks';
import s from './HeaderUser.module.scss';
import {logout} from '../../../bll/auth-reducer';
import {UserPopUp} from './UserPopUp/UserPopUp';
import {NavLink, useNavigate} from 'react-router-dom';

export const HeaderUser = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {authProfile, isAuth} = useAppSelector(state => state.auth)
    const [active, setActive] = useState<boolean>(false)
    useEffect(() => {
        window.addEventListener('click', offActiveHandler)
        return () => {
            window.removeEventListener('click', offActiveHandler)
        }
    })
    const onActiveHandler = (e: MouseEvent<HTMLDivElement>) => {
        !active && e.stopPropagation()
        setActive(true)
    }
    const offActiveHandler = () => setActive(false)
    const logoutHandler = () => {
        dispatch(logout())
        navigate('/login')
    }

    return (
        <div className={s.main}>
            {isAuth ?
                <>
                    <div className={s.container} onClick={onActiveHandler}>
                        <div style={{backgroundImage: `url(${authProfile?.photos.small})`}} className={s.photo}/>
                        <div className={s.userName}>
                            {authProfile?.fullName}
                        </div>
                        <div style={{backgroundImage: `url(${arrow})`}} className={s.arrow}/>
                    </div>
                    <UserPopUp logoutHandler={logoutHandler} active={active}/>
                </>
                : <>
                    <NavLink to={'/login'}>Login</NavLink>
                </>
            }
        </div>
    )
}