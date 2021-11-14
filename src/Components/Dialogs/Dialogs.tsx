import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './Dialog/DialogItem';
import {Message} from './Message/MessageItem';
import {addMessageAC, DialogType, MessageActionType, MessageType, updateMessageTextAC} from '../../redux/state';

type DialogsPropsType = {
    DialogPropsItem: Array<DialogType>
    MessagePropsItem: Array<MessageType>
    dispatch: (action: MessageActionType) => void
    newMessageText: string
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogItems = props.DialogPropsItem.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageItems = props.MessagePropsItem.map(m => <Message id={m.id} message={m.message} sender={m.sender}/>)

    const addMessage = () => {
        props.dispatch(addMessageAC(props.newMessageText))
    }

    const updateNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateMessageTextAC(e.currentTarget.value))
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
