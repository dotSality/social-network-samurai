import {addMessage, DialogType, MessageType, updateMessageText} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {WithAuthRedirect} from '../../HOC/WithAuthRedirect';
import {compose} from 'redux';

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


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {addMessage, updateMessageText}),
    WithAuthRedirect
)(Dialogs)


