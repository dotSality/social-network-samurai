import React, { ChangeEvent, memo, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../bll/hooks';
import { updateUserStatus } from '../../../../bll/profile-reducer';
import s from './ProfileStatus.module.scss';
import { Input } from 'antd';

type PropsType = {
  isOwner: boolean;
}

export const ProfileStatus = memo(({ isOwner }: PropsType) => {

  const profileStatus = useAppSelector(state => state.auth.status);
  const dispatch = useAppDispatch();
  const [editMode, setEditMode] = useState<boolean>(false);
  const [status, setStatus] = useState<string | null>(profileStatus || '');

  useEffect(() => {
    setStatus(profileStatus);
  }, [profileStatus]);

  const onEditMode = () => {
    if (isOwner) {
      setEditMode(true);
    }
  };

  const offEditMode = () => {
    setEditMode(false);
    if (status && status !== profileStatus) dispatch(updateUserStatus(status));
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div
      className={`${s.container} ${isOwner ? s.owner : ""}`}
      onClick={onEditMode}
    >
      {!editMode
        ? (
          <div className={s.status}>
            {status || 'Enter your status'}
          </div>
        )
        : <Input onChange={onStatusChange} autoFocus onBlur={offEditMode} value={status!}/>}
    </div>
  );
});