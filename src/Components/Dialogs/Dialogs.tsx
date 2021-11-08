import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './Dialog/DialogItem';
import {Message} from './Message/MessageItem';
import {DialogType, MessageType, updateNewMessageText} from '../../redux/state';

type DialogsPropsType = {
    DialogPropsItem: Array<DialogType>
    MessagePropsItem: Array<MessageType>
    addMessage: () => void
    updateNewMessageText: (newText: string) => void
    newMessageText: string
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogItems = props.DialogPropsItem.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageItems = props.MessagePropsItem.map(m => <Message id={m.id} message={m.message} sender={m.sender}/>)

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
                        onChange={updateNewMessageText}
                        value={props.newMessageText}
                    />
                </div>
            </div>

        </div>
    )
}

export default Dialogs;
