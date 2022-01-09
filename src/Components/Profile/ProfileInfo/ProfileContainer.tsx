import React from "react";
import Profile from '../Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {getUserStatus, loadUserProfile, updateUserStatus} from '../../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';

type PathParamsType = {
    usedId: string
}

type ContactsType = {
    facebook: string | null,
    website: string | null,
    vk: string | null,
    twitter: string | null,
    instagram: string | null,
    youtube: string | null,
    github: string | null,
    mainLink: string | null
}

type PhotosType = {
    small: string | null,
    large: string | null
}
export type ProfileType = {
    aboutMe: string | null,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string,
    userId: number,
    photos: PhotosType,
}

type MapStateToPropsType = ReturnType<typeof mapStateToProps>

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
    loadUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
type RoutedProfileType = RouteComponentProps<PathParamsType> & ProfilePropsType

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
    }
}

export class ProfileContainer extends React.Component<RoutedProfileType> {

    componentDidMount() {
        let userId: number = +this.props.match.params.usedId
        // userId ? this.props.history.push('/login') : userId = 6623/*this.props.authorizedUserId */
        if (!userId) {
            // @ts-ignore
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }

        }
        this.props.loadUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {loadUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
)(ProfileContainer)