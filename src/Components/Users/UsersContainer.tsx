import React from 'react';
import {connect} from 'react-redux';
import {followToggleAC, setCurrentPageAC, setTotalCountAC, setUsersAC, UsersReducerActionType, UserType} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Users} from './Users';

type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

type MapDispatchToPropsType = {
    toggleFollow: (userID: number) => void,
    setUsers: (users: UserType[]) => void,
    setCurrentPage: (currentPage: number) => void,
    setTotalCount: (totalCount: number) => void
}

const mapDispatchToProps = (dispatch: (action: UsersReducerActionType) => void): MapDispatchToPropsType => {
    return {
        toggleFollow: (userID: number) => {
            dispatch(followToggleAC(userID))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        }
    }

}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)