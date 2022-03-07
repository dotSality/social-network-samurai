import {lazy, useEffect} from 'react';
import './App.css';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import {Navigate, Route, Routes} from 'react-router-dom';
import {LoginPage} from './Components/LoginPage/LoginPage';
import {initializeApp} from './bll/app-reducer';
import {Preloader} from './Components/Preloader/Preloader';
import {LazyWithSuspense} from './HOC/LazyWithSuspense';
import {useAppDispatch, useAppSelector} from './bll/hooks';
import {Header} from './Components/Header/Header';
import {NavBar} from './Components/NavBar/NavBar';
import {Home} from './Components/Profile/Home';
import {fetchFriends} from './bll/sidebar-reducer';

const Dialogs = LazyWithSuspense(lazy(() => import('./Components/Dialogs/Dialogs')))
const Profile = LazyWithSuspense(lazy(() => import('./Components/Profile/Profile')))
const Users = LazyWithSuspense(lazy(() => import('./Components/Users/Users')))

export const App = () => {

    const {initialized, status} = useAppSelector(state => state.app)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchFriends())
        dispatch(initializeApp())
    }, [])

    if (!initialized) return <Preloader/>

    // if (status === 'loading') return <Preloader/>

    return <div className={'app-wrapper'}>
        <Header/>
        <NavBar/>
        <div className={'app-wrapper-content'}>
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
        </div>
    </div>
}
