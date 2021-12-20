import React from 'react';
import {connect} from 'react-redux';
import {followToggle, getUsers, setCurrentPage, toggleFollow, toggleIsFollowingProgress, UserType} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {compose} from 'redux';
import {WithAuthRedirect} from '../../HOC/WithAuthRedirect';

type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowing: number[] | never[]
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing
    }
}

type MapDispatchToPropsType = {
    followToggle: (userID: number) => void,
    setCurrentPage: (currentPage: number) => void,
    toggleIsFollowingProgress: (isFollowing: boolean, userID: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    toggleFollow: (userID: number, isFollowed: boolean) => void
}

type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

export class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage);
        this.props.getUsers(currentPage, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                isFollowing={this.props.isFollowing}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                toggleFollow={this.props.toggleFollow}
                users={this.props.users}
            />
        </>
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {followToggle,
        setCurrentPage, toggleIsFollowingProgress, getUsers, toggleFollow}),
    WithAuthRedirect
)(UsersContainer)