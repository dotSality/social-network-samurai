export type FriendsItemType = {
    avatar: string
    name: string
}

export type SidebarType = {
    friends: FriendsItemType[]
}

let initialState: SidebarType = {
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

export const sidebarReducer = (state = initialState, action: any) => {

    return state
}