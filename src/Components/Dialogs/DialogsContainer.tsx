import React from 'react';
import {addMessage, DialogType, MessageType} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {WithAuthRedirect} from '../../HOC/WithAuthRedirect';
import {compose} from 'redux';

type MapStateToPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

type MapDispatchToPropsType = {
    addMessage: (messageText: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {addMessage}),
    WithAuthRedirect
)(Dialogs)


