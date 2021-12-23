export type FriendsItemType = {
    id: number
    avatar: string
    name: string
}

export type SidebarType = {
    friends: FriendsItemType[]
}

let initialState: SidebarType = {
    friends: [
        {
            id: 1,
            avatar: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
            name: 'Alexey'
        },
        {
            id: 2,
            avatar: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
            name: 'Dmitry'
        },
        {
            id: 3,
            avatar: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
            name: 'Sveta'
        }
    ]
}

export const sidebarReducer = (state = initialState, action: any) => {

    return state
}