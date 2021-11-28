const FOLLOW_TOGGLE = 'FOLLOW-TOGGLE';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';

type PhotosType = {
    small: string | null
    large: string | null
}

export type UserType = {
    name: string,
    id: number,
    uniqueUrlName: string | null,
    photos: PhotosType,
    status: string | null,
    followed: boolean,
}

type InitialStateType = typeof initialState;

const initialState = {
    users: [] as UserType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 3
}

export const followToggleAC = (userID: number) => ({type: FOLLOW_TOGGLE, userID} as const);
type FollowToggleActionType = ReturnType<typeof followToggleAC>;
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users} as const);
type SetUsersActionType = ReturnType<typeof setUsersAC>;
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const);
type SetCurrentPageActionType = ReturnType<typeof setCurrentPageAC>;
export const setTotalCountAC = (totalCount: number) => ({type: SET_TOTAL_COUNT, totalCount} as const);
type SetTotalCountActionType = ReturnType<typeof setTotalCountAC>

export type UsersReducerActionType = SetUsersActionType | FollowToggleActionType | SetCurrentPageActionType | SetTotalCountActionType

export const usersReducer = (state = initialState, action: UsersReducerActionType): InitialStateType => {
    switch (action.type) {
        case FOLLOW_TOGGLE:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: !u.followed} : u)};
        case SET_USERS:
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        default:
            return state;
    }
}