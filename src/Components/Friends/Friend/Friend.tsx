import React, {useState} from 'react';
import s from './Friend.module.scss';
import {useNavigate} from 'react-router-dom';

type PropsType = {
    avatar: string;
    name: string;
    id: number;
}

export function Friend({avatar, name, id}: PropsType) {
    const [hover, setHover] = useState<boolean>(false)
    const onHoverHandler = () => setHover(true)
    const offHoverHandler = () => setHover(false)
    const navigate = useNavigate()
    const onProfileNavigateHandler = () => navigate(`profile/${id}`)
    const nameClassName = `${s.name} ${hover ? s.active : ''}`
    return (
        <div onMouseEnter={onHoverHandler} onMouseLeave={offHoverHandler} className={s.friend} onClick={onProfileNavigateHandler}>
            <div className={s.avatar} style={{backgroundImage: `url(${avatar})`}}/>{'\n'}
            <span className={nameClassName}>{name}</span>
        </div>
    )
}