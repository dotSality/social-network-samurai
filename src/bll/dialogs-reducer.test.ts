import {addMessage, dialogsReducer, DialogType, MessageType} from './dialogs-reducer';

let state: any;

beforeEach(() => {
    state = {
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
})

test('new message should be added',() => {
    const message = 'dfawdaw'
    let action = addMessage(message)
    let newState = dialogsReducer(state, action)

    expect(newState.messages.length).toBe(6)
    expect(newState.messages[5].message).toBe(message)
    expect(newState.dialogs).toStrictEqual(state.dialogs)
})