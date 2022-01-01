import React from 'react';
import {connect} from 'react-redux';
import {followToggle, requestUsers, setCurrentPage, toggleFollow, toggleIsFollowingProgress, UserType} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {compose} from 'redux';
import {WithAuthRedirect} from '../../HOC/WithAuthRedirect';
import {getCurrentPage, getIsFetching, getIsFollowing, getPageSize, getTotalUsersCount, getUsers} from '../../redux/users-selector';

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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowing: getIsFollowing(state),
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
        setCurrentPage, toggleIsFollowingProgress, requestUsers, toggleFollow}),
    WithAuthRedirect
)(UsersContainer)