const ADD_MESSAGE = 'ADD-MESSAGE'

export type MessageType = {
    id: number
    message: string
    sender: boolean
}

export type DialogType = {
    name: string
    id: number
}

const initialState = {
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
}

export const dialogsReducer = (state = initialState, action: MessageActionType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.messageText,
                sender: false
            };
            return {...state, messages: [...state.messages, newMessage]};
        default:
            return state;
    }
}

export type MessageActionType = ReturnType<typeof addMessage>

export const addMessage = (messageText: string) => ({type: ADD_MESSAGE, messageText: messageText} as const)
