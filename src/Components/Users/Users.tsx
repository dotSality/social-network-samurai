import React, {memo, useEffect} from 'react';
import {clearUsersData, requestUsers, setCurrentPage} from '../../bll/users-reducer';
import {Pagination} from './Pagination';
import {User} from './User';
import {useAppDispatch, useAppSelector} from '../../bll/hooks';
import {usersData} from '../../bll/selectors';
import {WithAuthRedirect} from '../../HOC/WithAuthRedirect';
import {InnerPreloader} from '../InnerPreloader/InnerPreloader';
import s from './Users.module.scss';

export default WithAuthRedirect(memo(() => {
    const {totalUsersCount, pageSize, currentPage, users} = useAppSelector(usersData)
    const {status} = useAppSelector(state => state.app)

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(requestUsers({currentPage, pageSize}))
        return () => {
            dispatch(clearUsersData())
        }
    }, [])

    const onPageChanged = (currentPage: number, pageSize: number) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(requestUsers({currentPage, pageSize}));
    }

    return <div className={s.main}>
        {!!totalUsersCount && <Pagination
            pageSize={pageSize}
            currentPage={currentPage}
            totalUsersCount={totalUsersCount}
            onPageChanged={onPageChanged}
        />}
        <div className={s.content}>
            {status === 'loading'
                ? <InnerPreloader/>
                : users.map(u => <User key={u.id} u={u}/>)}
        </div>
    </div>
}))



































