const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'


export type MessageType = {
    id: number
    message: string
    sender: boolean
}

export type DialogType = {
    name: string
    id: number
}

export type MessagePageType = {
    newMessageText: string
    messages: MessageType[]
    dialogs: DialogType[]
}

const initialState: MessagePageType = {
    newMessageText: '',
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Victor'},
        {id: 5, name: 'Valery'},
    ],
    messages: [
        {id: 1, message: 'Hi', sender: true},
        {id: 2, message: 'Yo!', sender: false},
        {id: 3, message: 'What\'s up? I saw you yesterday at the park at 9 o\'clock!', sender: true},
        {id: 4, message: 'Okay... Why do you stalkering me?!', sender: false},
        {id: 5, message: 'I LOVE YOU BABE! I WANNA BE WITH YOU!!!', sender: true},
    ]
}

export const dialogsReducer = (state = initialState, action: MessageActionType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.messageText,
                sender: false
            };
            // state.messages.push(newMessage)
            // state.newMessageText = ''
            return {...state, messages: [...state.messages, newMessage], newMessageText: ''};
        case UPDATE_NEW_MESSAGE_TEXT:
            // state.newMessageText = action.newText
            return {...state, newMessageText: action.newText};
        default:
            return state;
    }
}

export type MessageActionType = ReturnType<typeof addMessageAC> | ReturnType<typeof updateMessageTextAC>

export const addMessageAC = (messageText: string) => ({type: ADD_MESSAGE, messageText: messageText} as const)
export const updateMessageTextAC = (newText: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: newText} as const)