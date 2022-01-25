import React from "react";
import Profile from '../Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {getUserStatus, loadUserProfile, submitProfile, updateUserStatus, uploadPhoto} from '../../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import * as process from 'process';
import {ProfileDataType} from './ProfileDataForm/ProfileDataForm';

type PathParamsType = {
    usedId: string
}

export type ContactsType = {
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
    loadUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
    uploadPhoto: (photo: File | null) => void
    submitProfile: (profile: ProfileDataType, userId: number) => void
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

    refreshProfile() {
        let userId = +this.props.match.params.usedId
        if (!userId) {
            userId = this.props.authorizedUserId as number
        }
        this.props.loadUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<RoutedProfileType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.match.params.usedId !== this.props.match.params.usedId) this.refreshProfile()
    }

    render() {
        return (
            <Profile isOwner={!this.props.match.params.usedId} {...this.props}/>
        )
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {loadUserProfile, getUserStatus,
        updateUserStatus, uploadPhoto, submitProfile}),
    withRouter,
)(ProfileContainer)