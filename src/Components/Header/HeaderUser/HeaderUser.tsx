import {memo, useCallback, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../bll/hooks';
import s from './HeaderUser.module.scss';
import {logout} from '../../../bll/auth-reducer';
import {UserPopUp} from './UserPopUp/UserPopUp';
import {NavLink, useNavigate} from 'react-router-dom';
import {LoggedUser} from './LoggedUser/LoggedUser';

export const HeaderUser = memo(() => {

    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const {isAuth} = useAppSelector(state => state.auth)

    const [isActive, setIsActive] = useState<boolean>(false)

    useEffect(() => {
        if (isActive) window.addEventListener('click', offActiveHandler)
        return () => {
            if (isActive) window.removeEventListener('click', offActiveHandler)
        }
    }, [isActive, dispatch])

    const offActiveHandler = useCallback(() => isActive && setIsActive(false), [isActive, dispatch])

    const logoutHandler = useCallback(() => {
        dispatch(logout())
        navigate('/login')
    }, [dispatch])

    const mainClassName = `${s.main} ${isActive && s.active}`

    return (
        <div className={mainClassName}>
            {isAuth ?
                <>
                    <LoggedUser isActive={isActive} setIsActive={setIsActive}/>
                    <UserPopUp logoutHandler={logoutHandler} active={isActive}/>
                </>
                : <NavLink className={s.link} to={'/login'}>
                    Login
            </NavLink>
            }
        </div>
    )
})