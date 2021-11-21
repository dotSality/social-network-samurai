import React from 'react';
import {addMessageAC, updateMessageTextAC} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';
import {StoreType} from '../../redux/store';
import {StoreContext} from '../../StoreContext';
//
// type DialogsPropsType = {
//     store: StoreType
// }

export const DialogsContainer = () => {

    // const state = props.store.getState()
    //
    // const addMessage = () => {
    //     props.store.dispatch(addMessageAC(state.dialogsPage.newMessageText))
    // }
    //
    // const updateNewMessageText = (text: string) => {
    //     props.store.dispatch(updateMessageTextAC(text))
    // }

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    const state = store.getState()

                    const addMessage = () => {
                        store.dispatch(addMessageAC(state.dialogsPage.newMessageText))
                    }

                    const updateNewMessageText = (text: string) => {
                        store.dispatch(updateMessageTextAC(text))
                    }

                    return <Dialogs
                        updateNewMessageText={updateNewMessageText}
                        addMessage={addMessage}
                        messageItems={state.dialogsPage.messages}
                        dialogItems={state.dialogsPage.dialogs}
                        newMessageText={state.dialogsPage.newMessageText}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}