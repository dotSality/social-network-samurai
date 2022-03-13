import React, {memo, useEffect} from 'react';
import {clearUsersData, fetchUsers, setCurrentPage} from '../../bll/users-reducer';
import {Pagination} from './Pagination/Pagination';
import {useAppDispatch, useAppSelector} from '../../bll/hooks';
import {usersData} from '../../bll/selectors';
import {WithAuthRedirect} from '../../HOC/WithAuthRedirect';
import s from './Users.module.scss';
import c from '../../common/styles/Common.module.scss';
import {UsersList} from './UsersList/UsersList';
import {SortSelect} from './SortSelect/SortSelect';
import {UseStickyScroll} from '../../hooks/useStickyScroll';

export default WithAuthRedirect(memo(() => {
    const {totalUsersCount, pageSize, currentPage} = useAppSelector(usersData)

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchUsers({currentPage, pageSize}))
        return () => {
            dispatch(clearUsersData())
        }
    }, [])


    const {ref, isScrolled} = UseStickyScroll<HTMLDivElement>(66 - 72)

    const mainClassName = `${s.main} ${isScrolled && s.scrolled}`

    const filterBlockClassName = `${s.filterBlock} ${isScrolled && s.scrolled}`

    const infoClassName = `${s.info} ${isScrolled && s.scrolled}`

    const onPageChanged = (currentPage: number, pageSize: number) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(fetchUsers({currentPage, pageSize}));
    }

    return <div ref={ref} className={`${c.container} ${mainClassName}`}>
        <div className={filterBlockClassName}>
            <div>
                <input type="text"/>
            </div>
            {!!totalUsersCount && <Pagination
                pageSize={pageSize}
                currentPage={currentPage}
                totalUsersCount={totalUsersCount}
                onPageChanged={onPageChanged}
            />}
            <SortSelect/>
        </div>
        <div className={infoClassName}>
            <span>
                All users: {totalUsersCount}
            </span>
        </div>
        <UsersList isScrolled={isScrolled}/>
    </div>
}))
