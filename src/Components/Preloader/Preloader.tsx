import loading from '../../common/Img/Circle-Loading.svg';
import React from 'react';
import s from './Preloader.module.scss';

export const Preloader = () => {
    return (
        <div className={s.container}>
            <img style={{width: '350px'}} src={loading} alt={'preloader'}/>
        </div>
    )
}