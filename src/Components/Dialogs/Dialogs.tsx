import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './Dialog/DialogItem';
import {Message} from './Message/MessageItem';
import {DialogsPropsType} from './DialogsContainer';
import {MessageForm} from './AddMessageForm/MessageForm';

const Dialogs = (props: DialogsPropsType) => {

    let dialogItems = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageItems = props.messages.map(m => <Message key={m.id} id={m.id} message={m.message} sender={m.sender}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                {messageItems}
                <div className={s.addMsg}>
                    <MessageForm {...props}/>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;
