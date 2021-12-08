import React from 'react';
import {connect} from 'react-redux';
import {followToggle, setCurrentPage, setTotalCount, setUsers, toggleFetching, UserType} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import axios from 'axios';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';

type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

type MapDispatchToPropsType = {
    followToggle: (userID: number) => void,
    setUsers: (users: UserType[]) => void,
    setCurrentPage: (currentPage: number) => void,
    setTotalCount: (totalCount: number) => void,
    toggleFetching: (isFetching: boolean) => void
}

type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

export class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
            withCredentials: true
        }).then(
            response => {
                this.props.toggleFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            }
        );
    }

    onPageChanged = (currentPage: number) => {
        this.props.toggleFetching(true)
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`,{
            withCredentials: true
        }).then(
            response => {

                this.props.setUsers(response.data.items);
                this.props.toggleFetching(false)
            }
        );
    }

    render() {
        return <>
        {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                toggleFollow={this.props.followToggle}
                users={this.props.users}
            />
        </>
    }
}

export default connect(mapStateToProps, {
    followToggle, setUsers, setCurrentPage, setTotalCount, toggleFetching})(UsersContainer)