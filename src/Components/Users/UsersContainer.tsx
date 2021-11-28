import React from 'react';
import {connect} from 'react-redux';
import {followToggleAC, setUsersAC, UsersReducerActionType, UserType} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Users} from './Users';

type MapStateToPropsType = {
    users: UserType[]
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
    }
}

type MapDispatchToPropsType = {
    toggleFollow: (userID: number) => void,
    setUsers: (users: UserType[]) => void
}

const mapDispatchToProps = (dispatch: (action: UsersReducerActionType) => void): MapDispatchToPropsType => {
    return {
        toggleFollow: (userID: number) => {
            dispatch(followToggleAC(userID))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }

}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)