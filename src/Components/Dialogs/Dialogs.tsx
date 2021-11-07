import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './Dialog/DialogItem';
import {Message} from './Message/MessageItem';
import {DialogType, MessageType} from '../../redux/state';

type DialogsPropsType = {
    DialogPropsItem: Array<DialogType>
    MessagePropsItem: Array<MessageType>
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogItems = props.DialogPropsItem.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageItems = props.MessagePropsItem.map(m => <Message id={m.id} message={m.message} sender={m.sender}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                {messageItems}
            </div>
        </div>
    )
}

export default Dialogs;
