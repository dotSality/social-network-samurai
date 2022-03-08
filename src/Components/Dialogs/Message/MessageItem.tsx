import React from 'react';
import s from './MessageItem.module.css';
import {MessageType} from '../../../bll/dialogs-reducer';

export const Message = (props: MessageType) => {
    return (
        <div className={props.sender ? s.message : s.self}>{props.message}
            <div className={s.time}>20:00</div>
        </div>
    )
}