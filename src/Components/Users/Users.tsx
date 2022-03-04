import React, {useEffect} from 'react';
import {requestUsers, setCurrentPage} from '../../bll/users-reducer';
import {Pagination} from './Pagination';
import {User} from './User';
import {useAppDispatch, useAppSelector} from '../../bll/hooks';
import {usersData} from '../../bll/selectors';
import {WithAuthRedirect} from '../../HOC/WithAuthRedirect';


export default WithAuthRedirect(() => {
    const {totalUsersCount, pageSize, currentPage} = useAppSelector(usersData)
    const {users} = useAppSelector(usersData)

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(requestUsers({currentPage, pageSize}))
    }, [])

    const onPageChanged = (currentPage: number, pageSize: number) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(requestUsers({currentPage, pageSize}));
    }

    return <div>
        <Pagination
            pageSize={pageSize}
            currentPage={currentPage}
            totalUsersCount={totalUsersCount}
            onPageChanged={onPageChanged}
        />
        {users.map(u => <User key={u.id} u={u}/>)}
    </div>
})



































