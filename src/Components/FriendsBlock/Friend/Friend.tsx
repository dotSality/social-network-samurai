import React, {useState} from 'react';
import s from './Friend.module.scss';
import {useNavigate} from 'react-router-dom';

type PropsType = {
    avatar: string;
    name: string;
    id: number;
}

export function Friend({avatar, name, id}: PropsType) {

    const navigate = useNavigate()

    const [hover, setHover] = useState<boolean>(false)

    const nameClassName = `${s.name} ${hover ? s.active : ''}`

    const friendClassName = `${s.friend} ${hover && s.active}`

    const onHoverHandler = () => setHover(true)

    const offHoverHandler = () => setHover(false)

    const onProfileNavigateHandler = () => navigate(`profile/${id}`)

    return (
        <div onMouseEnter={onHoverHandler} onMouseLeave={offHoverHandler} className={friendClassName} onClick={onProfileNavigateHandler}>
            <div className={s.avatar} style={{backgroundImage: `url(${avatar})`}}/>{'\n'}
            <span className={nameClassName}>{name}</span>
        </div>
    )
}