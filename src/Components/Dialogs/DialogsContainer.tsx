import React from 'react';
import {addMessageAC, DialogType, MessageActionType, MessageType, updateMessageTextAC} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';

type MapStateToPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
}

type MapDispatchToPropsType = {
    addMessage: (messageText: string) => void
    updateNewMessageText: (text: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType


let mapStateToProps = (props: AppStateType): MapStateToPropsType => {
    return {
        dialogs: props.dialogsPage.dialogs,
        messages: props.dialogsPage.messages,
        newMessageText: props.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch: (action: MessageActionType) => void): MapDispatchToPropsType => {
    return {
        addMessage: (messageText: string) => {
            dispatch(addMessageAC(messageText))
        },
        updateNewMessageText: (text: string) => {
            dispatch(updateMessageTextAC(text))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)