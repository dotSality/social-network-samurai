import {AppStateType} from './redux-store';
import {createSelector} from 'reselect';

export const getUsersState = (state: AppStateType) => state.usersPage.users
export const getUsers = createSelector(getUsersState, (users) => users)

export const getPageSize = (state: AppStateType) => state.usersPage.pageSize
export const getTotalUsersCount = (state: AppStateType) => state.usersPage.totalUsersCount
export const getCurrentPage = (state: AppStateType) => state.usersPage.currentPage
export const getIsFetching = (state: AppStateType) => state.usersPage.isFetching
export const getIsFollowing = (state: AppStateType) => state.usersPage.isFollowing
