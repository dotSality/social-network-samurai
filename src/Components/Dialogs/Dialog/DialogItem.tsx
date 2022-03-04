import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from 'react-router-dom';
import {DialogType} from '../../../bll/dialogs-reducer';

export const DialogItem = (props: DialogType) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}