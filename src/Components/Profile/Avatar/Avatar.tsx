import userPhoto from '../../../common/Img/default-user.jpg';
import React, {ChangeEvent, useState} from 'react';
import {Nullable, uploadPhoto} from '../../../bll/profile-reducer';
import {useAppDispatch} from '../../../bll/hooks';
import s from './Avatar.module.scss';
import * as stream from 'stream';

type PropsType = {
    avatar: Nullable<string>;
    isOwner: boolean;
}

export const Avatar = ({avatar, isOwner}: PropsType) => {

    const [isShow, setIsShow] = useState<boolean>(false)

    const dispatch = useAppDispatch()
    const onMainPhotoSelect = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files!.length) dispatch(uploadPhoto(e.target.files![0]))
    }

    const removePhotoOnClick = () => {
        const url = userPhoto;
        fetch(url)
            .then(res => res.blob())
            .then(blob => {
                const file = new File([blob], "File name.jpg", {type: "image/jpg"})
                dispatch(uploadPhoto(file))
                // console.log(file)
            })
    }

    const showUploaderHandler = () => setIsShow(true)
    const hideUploaderHandler = () => setIsShow(false)

    const deleterClassName = `${s.deleter} ${isShow && s.active}`
    const uploaderClassName = `${s.uploader} ${isShow && s.active}`

    return (
        <div className={s.container} onMouseEnter={showUploaderHandler} onMouseLeave={hideUploaderHandler}>
            <div role="presentation" style={{backgroundImage: `url(${avatar || userPhoto})`}} className={s.avatar}/>
            {avatar !== userPhoto && <div className={deleterClassName} onClick={removePhotoOnClick}>
                x
            </div>}
            <div className={uploaderClassName}>
                {isOwner && <label>
                    <input accept=".jpg, .jpeg, .png" className={s.input} onChange={onMainPhotoSelect} type={'file'}/>
                    <span className={s.button}>Upload photo</span>
                </label>}
            </div>
        </div>
    )
}