export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    name: string
    id: number
}

export type PostType = {
    id: number
    post: string
    likesCount: number
}

export type MessagePageType = {
    messages: MessageType[]
    dialogs: DialogType[]
}

export type ProfilePageType = {
    posts: PostType[]
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagePageType
}

export let state: RootStateType = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Victor'},
            {id: 5, name: 'Valery'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Yo!'},
            {id: 3, message: 'Wath\'s up?'},
        ]
    },
    profilePage: {
        posts: [
            {id: 1, post: 'Hi', likesCount: 15},
            {id: 2, post: 'Yo!', likesCount: 12},
            {id: 3, post: 'Wazzup?', likesCount: 23},
        ],

    }
}