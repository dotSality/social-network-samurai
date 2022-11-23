import React, { ChangeEvent, memo, useEffect, useState } from 'react';
import { clearUsersData, fetchUsers } from '../../bll/users-reducer';
import { useAppDispatch, useAppSelector } from '../../bll/hooks';
import { usersData } from '../../bll/selectors';
import { WithAuthRedirect } from '../../HOC/WithAuthRedirect';
import s from './Users.module.scss';
import c from '../../common/styles/Common.module.scss';
import { UsersList } from './UsersList/UsersList';
import { SortSelect } from './SortSelect/SortSelect';
import { useStickyRef } from '../../hooks/useStickyRef';
import { useDebounceValue } from '../../hooks/useDebounceValue';
import { useSearchParams } from 'react-router-dom';
import { Input, Pagination } from 'antd';

export default WithAuthRedirect(memo(() => {
  const { totalUsersCount } = useAppSelector(usersData);

  const [search, setParams] = useSearchParams();

  const currentPage = Number(search.get('page')) || 1;

  const pageSize = Number(search.get('count')) || 10;

  const { stickyRef, isSticky } = useStickyRef();

  const [term, setTerm] = useState('');

  const onTempChange = (e: ChangeEvent<HTMLInputElement>) => setTerm(e.currentTarget.value);

  const debouncedValue = useDebounceValue<string>(term, 1500);

  useEffect(() => {
    if (term.trim()) {
      search.set('term', term);
      setParams(search);
    } else {
      search.delete('term');
      setParams(search);
    }
  }, [debouncedValue]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers({ currentPage, pageSize, term }));
  }, [currentPage, debouncedValue, dispatch, pageSize]);

  useEffect(() => () => {
    dispatch(clearUsersData());
  }, [dispatch]);

  const onPageChanged = (currentPage: number) => {
    search.set('page', String(currentPage));
    setParams(search);
  };

  return <div className={`${c.container} ${s.main}`}>
    <div className={s.info}>
      <span>
        All users: {totalUsersCount}
      </span>
    </div>
    <div ref={stickyRef} className={`${s.filterBlock} ${isSticky ? s.scrolled : ''}`}>
      <Input placeholder="Enter name..." className={s.searchInput} value={term} onChange={onTempChange} type="text"/>
      {!!totalUsersCount &&
        <Pagination
          showLessItems
          showSizeChanger={false}
          showQuickJumper={false}
          current={currentPage}
          total={totalUsersCount}
          onChange={onPageChanged}
        />}
      <SortSelect/>
    </div>
    <UsersList/>
  </div>;
}));
