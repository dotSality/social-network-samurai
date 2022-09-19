import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../Profile/Home';
import { LoginPage } from '../LoginPage/LoginPage';
import News from '../News/News';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';
import { LazyWithSuspense } from '../../HOC/LazyWithSuspense';

const Dialogs = LazyWithSuspense(lazy(() => import('../Dialogs/Dialogs')))
const Profile = LazyWithSuspense(lazy(() => import('../Profile/Profile')))
const Users = LazyWithSuspense(lazy(() => import('../Users/Users')))

const AppRoutes = () => (
  <Routes>
    <Route path={'/'} element={<Home/>}/>
    <Route path={'/login/'} element={<LoginPage/>}/>
    <Route path={'/dialogs/'} element={<Dialogs/>}/>
    <Route path={'/profile/:userId'} element={<Profile/>}/>
    <Route path={'/users/'} element={<Users/>}/>
    <Route path={'/news/'} element={<News/>}/>
    <Route path={'/music/'} element={<Music/>}/>
    <Route path={'/settings/'} element={<Settings/>}/>
  </Routes>
);

export default AppRoutes;