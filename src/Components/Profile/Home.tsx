import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {useAppSelector} from '../../bll/hooks';
import {useParams} from 'react-router-dom';
import {WithAuthRedirect} from '../../HOC/WithAuthRedirect';

export const Home = WithAuthRedirect(() => {

    const {authProfile, status} = useAppSelector(state => state.auth)

    return (
        <div>
            <ProfileInfo status={status} profile={authProfile} isOwner={true}/>
            <MyPosts/>
        </div>
    )
})