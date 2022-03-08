import s from './LoggedUser.module.scss';
import arrow from '../../../../common/Img/user-menu-arrow.svg';
import {useCallback, useState} from 'react';
import {useAppSelector} from '../../../../bll/hooks';

type PropsType = {
    isActive: boolean;
    setIsActive: (isActive: boolean) => void
}

export const LoggedUser = ({setIsActive, isActive}: PropsType) => {

    const authProfile = useAppSelector(state => state.auth.authProfile)
    const {photos, fullName} = authProfile!
    const [isHover, setIsHover] = useState<boolean>(false)

    const onActiveHandler = useCallback(() => {
        if (!isActive) {
            setIsActive(true)
        }
    }, [isActive])

    const userNameOnHoverClassName = `${s.userName} ${isHover && s.active}`

    return (
        <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className={s.container} onClick={onActiveHandler}>
            <div style={{backgroundImage: `url(${photos.small})`}} className={s.photo}/>
            <div className={userNameOnHoverClassName}>
                {fullName}
            </div>
            <div style={{backgroundImage: `url(${arrow})`}} className={s.arrow}/>
        </div>
    )
}