import React from 'react';
import {connect} from 'react-redux';
import {followToggleAC, setCurrentPageAC, setTotalCountAC, setUsersAC, UsersReducerActionType, UserType} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import axios from 'axios';
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

type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

export class UsersContainer extends React.Component<UsersPropsType> {

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(
            response => {
                this.props.setUsers(response.data.items);
            }
        );
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(
            response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            }
        );
    }


    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            toggleFollow={this.props.toggleFollow}
            users={this.props.users}
        />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)