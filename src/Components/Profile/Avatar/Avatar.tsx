import userPhoto from '../../../common/Img/default-user.jpg';
import React, {ChangeEvent} from 'react';
import {Nullable, uploadPhoto} from '../../../bll/profile-reducer';
import {useAppDispatch} from '../../../bll/hooks';
import s from './Avatar.module.scss';

type PropsType = {
    avatar: Nullable<string>;
    isOwner: boolean;
}

export const Avatar = ({avatar, isOwner}: PropsType) => {

    const dispatch = useAppDispatch()
    const onMainPhotoSelect = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files!.length) dispatch(uploadPhoto(e.target.files![0]))
    }

    return (
        <div className={s.container}>
            <div role="presentation" style={{backgroundImage: `url(${avatar || userPhoto})`}} className={s.avatar}/>
            {isOwner && <input className={s.uploader} onChange={onMainPhotoSelect} type={'file'}/>}
        </div>
    )
}