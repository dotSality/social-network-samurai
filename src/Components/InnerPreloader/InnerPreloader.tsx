import s from './InnerPreloader.module.scss';
import innerLoader from '../../common/Img/inner-loader.gif';
import React from 'react';

export const InnerPreloader = () => {
    return <div className={s.loader}>
        <img src={innerLoader} alt="loader"/>
    </div>
}