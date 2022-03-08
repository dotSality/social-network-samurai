import React, {ChangeEvent, memo, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../../bll/hooks';
import {updateUserStatus} from '../../../../bll/profile-reducer';
import s from './ProfileStatus.module.scss';

type PropsType = {
    isOwner: boolean;
}

export const ProfileStatus = memo(({isOwner}: PropsType) => {

    const profileStatus = useAppSelector(state => state.auth.status)
    const dispatch = useAppDispatch()
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string | null>(profileStatus || '')

    useEffect(() => {
        setStatus(profileStatus)
    }, [profileStatus])

    const [hover, setHover] = useState<boolean>(false)
    const onHover = () => setHover(true)
    const offHover = () => setHover(false)
    const activeClassName = `${s.status} ${isOwner && hover ? s.active : ''}`

    const onEditMode = () => {
        if (isOwner) {
            setEditMode(true)
        }
    }

    const offEditMode = () => {
        setEditMode(false)
        if (status) dispatch(updateUserStatus(status))
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div
            className={s.container}
            onMouseEnter={onHover}
            onMouseLeave={offHover}
            onClick={onEditMode}
        >
            {!editMode
                ? (<span className={activeClassName}>
                {status || 'no status'}
            </span>)
                : (<input onChange={onStatusChange} autoFocus onBlur={offEditMode} value={status!}/>)}
        </div>
    )
})