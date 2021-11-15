import {MessagePageType, MessageType} from './store';

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export const dialogsReducer = (state: MessagePageType, action: MessageActionType) => {

    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.messageText,
                sender: false
            };
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state;
        default:
            return state;
    }
}

export type MessageActionType = ReturnType<typeof addMessageAC> | ReturnType<typeof updateMessageTextAC>

export const addMessageAC = (messageText: string) => ({type: ADD_MESSAGE, messageText: messageText} as const)
export const updateMessageTextAC = (newText: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: newText} as const)