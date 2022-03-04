import {lazy, useEffect} from 'react';
import './App.css';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import {Route, Routes} from 'react-router-dom';
import {LoginPage} from './Components/LoginPage/LoginPage';
import {initializeApp} from './bll/app-reducer';
import {Preloader} from './Components/common/Preloader/Preloader';
import {LazyWithSuspense} from './HOC/LazyWithSuspense';
import {useAppDispatch, useAppSelector} from './bll/hooks';
import {Header} from './Components/Header/Header';
import {NavBar} from './Components/NavBar/NavBar';

const Dialogs = LazyWithSuspense(lazy(() => import('./Components/Dialogs/Dialogs')))
const Profile = LazyWithSuspense(lazy(() => import('./Components/Profile/Profile')))
const Users = LazyWithSuspense(lazy(() => import('./Components/Users/Users')))

export const App = () => {

    const initialized = useAppSelector(state => state.app.initialized)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(initializeApp())
    }, [])

    if (!initialized) return <Preloader/>
    return <div className={'app-wrapper'}>
        <Header/>
        <NavBar/>
        <div className={'app-wrapper-content'}>
            <Routes>
                <Route path={'/login/'} element={<LoginPage/>}/>
                <Route path={'/dialogs/'} element={<Dialogs/>}/>
                <Route path={'/profile/:userId'} element={<Profile/>}/>
                <Route path={'/users/'} element={<Users/>}/>
                <Route path={'/news/'} element={<News/>}/>
                <Route path={'/music/'} element={<Music/>}/>
                <Route path={'/settings/'} element={<Settings/>}/>
            </Routes>
        </div>
    </div>
}
