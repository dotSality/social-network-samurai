import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './Dialog/DialogItem';
import {Message} from './Message/MessageItem';
import {MessageForm} from './AddMessageForm/MessageForm';
import {useAppSelector} from '../../bll/hooks';

export default () => {

    const {dialogs,messages} = useAppSelector(state => state.dialogsPage)
    let dialogItems = dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageItems = messages.map(m => <Message key={m.id} id={m.id} message={m.message} sender={m.sender}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                {messageItems}
                <div className={s.addMsg}>
                    <MessageForm/>
                </div>
            </div>

        </div>
    )
}
