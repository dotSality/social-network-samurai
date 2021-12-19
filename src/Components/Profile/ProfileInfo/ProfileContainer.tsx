import React from "react";
import Profile from '../Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {loadUserProfile, setUserProfile} from '../../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {usersAPI} from '../../../api/api';
import {WithAuthRedirect} from '../../../HOC/WithAuthRedirect';
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
    aboutMe: string,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string,
    userId: number,
    photos: PhotosType
}

type MapStateToPropsType = {
    profile: ProfileType
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
    loadUserProfile: (userId: string) => void
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
type RoutedProfileType = RouteComponentProps<PathParamsType> & ProfilePropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export class ProfileContainer extends React.Component<RoutedProfileType> {

    componentDidMount() {
        let userId = this.props.match.params.usedId
        if (!userId) userId = '2'
        this.props.loadUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfile, loadUserProfile}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)

// let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

// const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

// export default connect(mapStateToProps, {setUserProfile,loadUserProfile})(WithUrlDataContainerComponent)