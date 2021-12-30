import React from "react";
import Profile from '../Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {getUserStatus, loadUserProfile, Nullable, updateUserStatus} from '../../../redux/profile-reducer';
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

type MapStateToPropsType = {
    profile: Nullable<ProfileType>,
    status: string,
    authorizedUserId: Nullable<number>,
    isAuth: boolean,
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
    loadUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
type RoutedProfileType = RouteComponentProps<PathParamsType> & ProfilePropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
    }
}

export class ProfileContainer extends React.Component<RoutedProfileType> {

    componentDidMount() {
        let userId = this.props.match.params.usedId
        if (!userId && this.props.authorizedUserId) userId = this.props.authorizedUserId.toString()
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