import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type MessageType = {
    id: number
    message: string
    sender: boolean
}

export type DialogType = {
    name: string
    id: number
}

const slice = createSlice({
    name: 'dialogs',
    initialState: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Victor'},
            {id: 5, name: 'Valery'},
        ] as DialogType[],
        messages: [
            {id: 1, message: 'Hi', sender: true},
            {id: 2, message: 'Yo!', sender: false},
            {id: 3, message: 'What\'s up? I saw you yesterday at the park at 9 o\'clock!', sender: true},
            {id: 4, message: 'Okay... Why do you stalkering me?!', sender: false},
            {id: 5, message: 'I LOVE YOU BABE! I WANNA BE WITH YOU!!!', sender: true},
        ] as MessageType[]
    },
    reducers:{
        addMessage(state, action: PayloadAction<string>) {
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.payload,
                sender: false
            };
            state.messages.push(newMessage)
        }
    }
})

export const dialogsReducer = slice.reducer
export const {addMessage} = slice.actions
