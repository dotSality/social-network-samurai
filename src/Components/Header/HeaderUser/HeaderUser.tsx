import {useEffect, useState, memo, useCallback} from 'react';
import arrow from '../../../common/Img/user-menu-arrow.svg';
import {useAppDispatch, useAppSelector} from '../../../bll/hooks';
import s from './HeaderUser.module.scss';
import {logout} from '../../../bll/auth-reducer';
import {UserPopUp} from './UserPopUp/UserPopUp';
import {NavLink, useNavigate} from 'react-router-dom';

export const HeaderUser = memo(() => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {authProfile, isAuth} = useAppSelector(state => state.auth)
    const [active, setActive] = useState<boolean>(false)
    useEffect(() => {
        if (active) window.addEventListener('click', offActiveHandler)
        return () => {
            if (active) window.removeEventListener('click', offActiveHandler)
        }
    }, [active, dispatch])

    const onActiveHandler = useCallback(() => {
        if (!active) {
            setActive(true)
        }
    }, [active, dispatch])
    const offActiveHandler = useCallback(() => active && setActive(false), [active, dispatch])
    const logoutHandler = useCallback(() => {
        dispatch(logout())
        navigate('/login')
    }, [dispatch])

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
})