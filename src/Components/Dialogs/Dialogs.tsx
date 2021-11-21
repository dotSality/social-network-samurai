import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './Dialog/DialogItem';
import {Message} from './Message/MessageItem';
import {DialogType, MessageType} from '../../redux/store';

type DialogsPropsType = {
    updateNewMessageText: (newText: string) => void
    addMessage: () => void
    messageItems: MessageType[]
    dialogItems: DialogType[]
    newMessageText: string
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogItems = props.dialogItems.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageItems = props.messageItems.map(m => <Message id={m.id} message={m.message} sender={m.sender}/>)

    const addMessage = () => {
        props.addMessage()
    }

    const updateNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                {messageItems}
                <div className={s.addMsg}>
                    <button onClick={addMessage}>Send message</button>
                    <textarea
                        placeholder={'Enter your message...'}
                        onChange={updateNewMessageText}
                        value={props.newMessageText}
                    />
                </div>
            </div>

        </div>
    )
}

export default Dialogs;
