
const FOLLOW_TOGGLE = 'FOLLOW-TOGGLE';
const SET_USERS = 'SET-USERS';

type LocationType = {
    city: string,
    country: string,
}

export type UserType = {
    id: number,
    avatar: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: LocationType,
}

type InitialStateType = typeof initialState;

const initialState = {
    users: [
        // {id: 1, avatar: 'https://avatarfiles.alphacoders.com/184/thumb-184458.jpg',
        //     followed: false, fullName: 'Maxim', status: 'I am the boss!' ,location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 2, avatar: 'https://avatarfiles.alphacoders.com/184/thumb-184458.jpg',
        //     followed: true, fullName: 'Dmitriy', status: 'The best!' ,location: {city: 'Kiev', country: 'Ukraine'}},
        // {id: 3, avatar: 'https://avatarfiles.alphacoders.com/184/thumb-184458.jpg',
        //     followed: true, fullName: 'Yury', status: 'Top!' ,location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 4, avatar: 'https://avatarfiles.alphacoders.com/184/thumb-184458.jpg',
        //     followed: false, fullName: 'Evgeniy', status: 'Hi...' ,location: {city: 'Moscow', country: 'Russia'}}
    ] as UserType[],
}

export const followToggleAC = (userID: number) => ({type: FOLLOW_TOGGLE, userID} as const);
type FollowToggleActionType = ReturnType<typeof followToggleAC>;
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users} as const);
type SetUsersActionType = ReturnType<typeof setUsersAC>

export type UsersReducerActionType = SetUsersActionType | FollowToggleActionType

export const usersReducer = (state = initialState, action: UsersReducerActionType) => {
    switch (action.type) {
        case FOLLOW_TOGGLE:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: !u.followed} : u)};
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]};
        default:
            return state;
    }
}