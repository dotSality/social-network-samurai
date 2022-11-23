import React from 'react';
import s from './Dialogs.module.scss';
import { DialogItem } from './Dialog/DialogItem';
import { Message } from './Message/MessageItem';
import { MessageForm } from './AddMessageForm/MessageForm';
import { useAppSelector } from '../../bll/hooks';
import { WithAuthRedirect } from '../../HOC/WithAuthRedirect';

const Dialogs = WithAuthRedirect(() => {

  const { dialogs, messages } = useAppSelector(state => state.dialogsPage);
  let dialogItems = dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
  let messageItems = messages.map(m => <Message key={m.id} id={m.id} message={m.message} sender={m.sender}/>);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogItems}
      </div>
      <div className={s.messages}>
        <div>
          {messageItems}
        </div>
        <MessageForm/>
      </div>

    </div>
  );
});

export default Dialogs;