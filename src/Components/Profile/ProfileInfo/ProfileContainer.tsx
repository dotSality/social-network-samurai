import React from "react";
import Profile from '../Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {setUserProfile} from '../../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';

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
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
type RoutedProfileType = RouteComponentProps<PathParamsType> & ProfilePropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    // return {
    //     aboutMe: state.profilePage.profile,
    //     contacts: ContactsType,
    //     lookingForAJob: boolean,
    //     lookingForAJobDescription: state.profilePage.profile,
    //     fullName: string,
    //     userId: number,
    //     photos: PhotosType
    // }
    return {
        profile: state.profilePage.profile
    }
}

export class ProfileContainer extends React.Component<RoutedProfileType>{

    componentDidMount() {
        let userId = this.props.match.params.usedId
        if (!userId)  userId = '2'
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            }
        );
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)