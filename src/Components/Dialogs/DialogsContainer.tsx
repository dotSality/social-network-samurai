import React from 'react';
import {addMessageAC, DialogType, MessageActionType, MessagePageType, MessageType, updateMessageTextAC} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

type MapStateToPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
}

type MapDispatchToPropsType = {
    addMessage: (state: MessagePageType) => void
    updateNewMessageText: (text: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType


let mapStateToProps = (props: MessagePageType): MapStateToPropsType => {
    return {
        dialogs: props.dialogs,
        messages: props.messages,
        newMessageText: props.newMessageText
    }
}

let mapDispatchToProps = (dispatch: (action: MessageActionType) => void): MapDispatchToPropsType => {
    return {
        addMessage: (state: MessagePageType) => {
            dispatch(addMessageAC(state.newMessageText))
        },
        updateNewMessageText: (text: string) => {
            dispatch(updateMessageTextAC(text))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)