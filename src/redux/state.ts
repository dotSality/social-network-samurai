

export const store: StoreType = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            messageForNewPost: '',
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
    },
    _callSubscriber() {
        console.log('state has been changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },

    dispatch(action: AddPostActionType | UpdatePostTextType | AddMessageActionType | UpdateMessageTextType) { // action ~ { type: 'ADD-POST' }
        debugger
        if(action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: new Date().getTime(),
                post: action.postText,
                likesCount: 0
            };
            this._state.profilePage.posts.unshift(newPost)
            this._state.profilePage.messageForNewPost = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.messageForNewPost = action.newText
            this._callSubscriber()
        }

        if(action.type === 'ADD-MESSAGE') {
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.messageText,
                sender: false
            };
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber()
        } else if(action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber()
        }
    }
}





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
    newMessageText: string
    messages: MessageType[]
    dialogs: DialogType[]
}

export type ProfilePageType = {
    messageForNewPost: string
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

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: () => void
    dispatch: (action: any) => void
    subscribe: (observer: () => void) => void
}


type AddPostActionType = {
    type: 'ADD-POST'
    postText: string
}
type UpdatePostTextType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type PostActionType = AddPostActionType | UpdatePostTextType


type AddMessageActionType = {
    type: 'ADD-MESSAGE'
    messageText: string
}
type UpdateMessageTextType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newText: string
}
export type MessageActionType = AddMessageActionType | UpdateMessageTextType