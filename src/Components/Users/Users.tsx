import React, { memo, useEffect } from 'react';
import { clearUsersData, fetchUsers, setCurrentPage } from '../../bll/users-reducer';
import { Pagination } from './Pagination/Pagination';
import { useAppDispatch, useAppSelector } from '../../bll/hooks';
import { usersData } from '../../bll/selectors';
import { WithAuthRedirect } from '../../HOC/WithAuthRedirect';
import s from './Users.module.scss';
import c from '../../common/styles/Common.module.scss';
import { UsersList } from './UsersList/UsersList';
import { SortSelect } from './SortSelect/SortSelect';
import { useStickyRef } from '../../hooks/useStickyRef';

export default WithAuthRedirect(memo(() => {
  const { totalUsersCount, pageSize, currentPage } = useAppSelector(usersData);

  const { stickyRef, isSticky } = useStickyRef();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers({ currentPage, pageSize }));
    return () => {
      dispatch(clearUsersData());
    };
  }, []);

  const onPageChanged = (currentPage: number, pageSize: number) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(fetchUsers({ currentPage, pageSize }));
  };

  return <div className={`${c.container} ${s.main}`}>
    <div className={s.info}>
            <span>
                All users: {totalUsersCount}
            </span>
    </div>
    <div ref={stickyRef} className={`${s.filterBlock} ${isSticky ? s.scrolled : ''}`}>
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
    <UsersList/>
  </div>;
}));
