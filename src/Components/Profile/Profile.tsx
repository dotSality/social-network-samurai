import React, {useEffect} from "react";
import {getUserStatus, loadUserProfile} from '../../bll/profile-reducer';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../bll/hooks';
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {WithAuthRedirect} from '../../HOC/WithAuthRedirect';

// type PathParamsType = {
//     userId: string
// }

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
//
// type MapStateToPropsType = ReturnType<typeof mapStateToProps>
//
// type MapDispatchToPropsType = {
//     loadUserProfile: (userId: number) => void
//     getUserStatus: (userId: number) => void
//     updateUserStatus: (status: string) => void
//     uploadPhoto: (photo: File | null) => void
//     submitProfile: (profile: ProfileDataType) => void
//     onEditMode: () => void
// }
//
// export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
// type RoutedProfileType = RouteComponentProps<PathParamsType> & ProfilePropsType
//
// const mapStateToProps = (state: RootStateType) => {
//     return {
//         profile: state.profilePage.profile,
//         status: state.profilePage.status,
//         authorizedUserId: state.auth.id,
//         isAuth: state.auth.isAuth,
//         formError: state.form.error,
//         editMode: state.form.editMode,
//     }
// }

export default WithAuthRedirect(() => {
    console.log('profile')
    const {userId} = useParams()
    const dispatch = useAppDispatch()
    const {id} = useAppSelector(state => state.auth)

    useEffect(() => {
        console.log(userId)
        refreshProfile()
    }, [userId])

    const refreshProfile = () => {
        if (userId) {
            let id = +userId
            dispatch(loadUserProfile(id))
            dispatch(getUserStatus(id))
        }
    }

    const isOwner = userId ? +userId === id : false

    return (
        <div className={s.mainCont}>
            <ProfileInfo isOwner={isOwner}/>
            <MyPostsContainer/>
        </div>
    )
})
//
// export default compose<React.ComponentType>(
//     connect(mapStateToProps, {
//         loadUserProfile, getUserStatus,
//         updateUserStatus, uploadPhoto, submitProfile, setEditMode
//     }),
//     withRouter,
// )(ProfileContainer)