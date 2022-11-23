import React from 'react';
import s from './Friend.module.scss';
import { useNavigate } from 'react-router-dom';

type PropsType = {
  avatar: string;
  name: string;
  id: number;
}

export function Friend({ avatar, name, id }: PropsType) {

  const navigate = useNavigate();

  const onProfileNavigateHandler = () => navigate(`profile/${id}`);

  return (
    <div className={s.friend} onClick={onProfileNavigateHandler}>
      <div className={s.avatar} style={{ backgroundImage: `url(${avatar})` }}/>
      {'\n'}
      <span className={s.name}>{name}</span>
    </div>
  );
}