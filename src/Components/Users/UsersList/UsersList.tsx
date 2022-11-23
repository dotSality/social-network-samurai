import s from './UsersList.module.scss';
import { InnerPreloader } from '../../InnerPreloader/InnerPreloader';
import { UserItem } from '../UserItem/UserItem';
import React, { memo } from 'react';
import { useAppSelector } from '../../../bll/hooks';
import { usersData } from '../../../bll/selectors';

export const UsersList = memo(() => {
  const { users, isFetching } = useAppSelector(usersData);

  return (
    <div className={s.content}>
      {isFetching && <InnerPreloader/>}
      {users.map(u => <UserItem key={u.id} u={u}/>)}
    </div>
  );
});