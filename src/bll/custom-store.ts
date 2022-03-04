export {}

/*
 import {profileReducer, PostActionType} from './profile-reducer';
 import {dialogsReducer, MessageActionType} from './dialogs-reducer';
 import {sidebarReducer} from './sidebar-reducer';
 import {ActionType} from './bll-store';

 const store: StoreType = {
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

     dispatch(action: any) {// action ~ { type: 'ADD-POST' }
         this._state.profilePage = profileReducer(this._state.profilePage,action)
         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
         this._state.sidebar = sidebarReducer(this._state.sidebar,action)

         this._callSubscriber();
     }
 }

 type MessageType = {
     id: number
     message: string
     sender: boolean
 }

 type DialogType = {
     name: string
     id: number
 }

 type PostType = {
     id: number
     post: string
     likesCount: number
 }

 type MessagePageType = {
     newMessageText: string
     messages: MessageType[]
     dialogs: DialogType[]
 }

 type ProfilePageType = {
     messageForNewPost: string
     posts: PostType[]
 }

 type FriendsItemType = {
     avatar: string
     name: string
 }

 type SidebarType = {
     friends: FriendsItemType[]
 }

 type RootStateType = {
     profilePage: ProfilePageType
     dialogsPage: MessagePageType
     sidebar: SidebarType
 }

 export type StoreType = {
     _state: RootStateType
     getState: () => RootStateType
     _callSubscriber: () => void
     dispatch: (action: ActionType) => void
     subscribe: (observer: () => void) => void
 }

*/

