import { useEffect } from 'react';
import s from './App.module.scss';
import { initializeApp } from './bll/app-reducer';
import { Preloader } from './Components/Preloader/Preloader';
import { useAppDispatch, useAppSelector } from './bll/hooks';
import { Header } from './Components/Header/Header';
import AppRoutes from './Components/Routes/Routes';
import 'antd/dist/antd.min.css';

export const App = () => {
  const { initialized, status } = useAppSelector(state => state.app);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeApp());
  }, [dispatch]);

  if (!initialized) return <Preloader/>;

  if (status === 'loading') return <Preloader/>;

  return <div className={s.appWrapper}>
    <Header/>
    <div className={s.appContainer}>
      <div className={s.appContent}>
        <AppRoutes/>
      </div>
    </div>
  </div>;
};
