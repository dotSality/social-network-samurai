import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import React from 'react';
import {useAppSelector} from '../../bll/hooks';
import {WithAuthRedirect} from '../../HOC/WithAuthRedirect';
import {useLocation} from 'react-router-dom';
import {InnerPreloader} from '../InnerPreloader/InnerPreloader';

export default WithAuthRedirect(() => {

    const {authProfile, status} = useAppSelector(state => state.auth)
    const location = useLocation()
    const isOwner = location.pathname === '/'

    if (!authProfile) {
        return <InnerPreloader/>
    }

    return <ProfileInfo status={status} profile={authProfile} isOwner={isOwner}/>
})