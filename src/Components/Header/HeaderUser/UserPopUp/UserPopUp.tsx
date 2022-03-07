import s from './UserPopUp.module.scss';
import {useNavigate} from 'react-router-dom';
import {memo, useCallback} from 'react';

type PropsType = {
    active: boolean
    logoutHandler: () => void
}

export const UserPopUp = memo(({active, logoutHandler}: PropsType) => {

    const navigate = useNavigate()
    const activeClassName = `${s.main} ${active ? s.active : ''}`
    const onProfileNavigate = useCallback(() => navigate('/'), [])
    const onSettingsNavigate = useCallback(() => navigate('/settings'), [])

    return (
        <div className={activeClassName}>
            <div className={s.item} onClick={onProfileNavigate}>Profile</div>
            <div className={s.item} onClick={onSettingsNavigate}>Settings</div>
            <div className={s.item} onClick={logoutHandler}>Logout</div>
        </div>
    )
})