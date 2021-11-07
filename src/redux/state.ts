export type MessageType = {
    id: number
    message: string
    sender: boolean
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

export type FriendsItemType = {
    avatar: string
    name: string
}

export type SidebarType = {
    friends: FriendsItemType[]
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagePageType
    sidebar: SidebarType
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
            {id: 1, message: 'Hi', sender: true},
            {id: 2, message: 'Yo!', sender: false},
            {id: 3, message: 'What\'s up? I saw you yesterday at the park at 9 o\'clock!' , sender: true},
            {id: 4, message: 'Okay... Why do you stalkering me?!', sender: false},
            {id: 5, message: 'I LOVE YOU BABE! I WANNA BE WITH YOU!!!' , sender: true},
        ]
    },
    profilePage: {
        posts: [
            {id: 1, post: 'Hi', likesCount: 15},
            {id: 2, post: 'Yo!', likesCount: 12},
            {id: 3, post: 'Wazzup?', likesCount: 23},
        ],

    },
    sidebar: {
        friends: [
            {
                avatar: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
                name: 'Alexey'
            },
            {
                avatar: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
                name: 'Dmitry'
            },
            {
                avatar: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
                name: 'Sveta'
            }
        ]
    }
}