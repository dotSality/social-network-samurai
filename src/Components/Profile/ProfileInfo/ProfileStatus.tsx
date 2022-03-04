import React, {ChangeEvent, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../bll/hooks';
import {updateUserStatus} from '../../../bll/profile-reducer';

export const ProfileStatus = () => {

    const profileStatus = useAppSelector(state => state.profilePage.status)
    const dispatch = useAppDispatch()
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(profileStatus)

    useEffect(() => {
        setStatus(profileStatus)
    }, [profileStatus])

    const onEditMode = () => setEditMode(true)

    const offEditMode = () => {
        setEditMode(false)
        dispatch(updateUserStatus(status))
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return <div>
        {!editMode ?
            (<div>
                <span onClick={onEditMode}>{status || 'no status'}</span>
            </div>) : (
                <div>
                    <input onChange={onStatusChange} autoFocus onBlur={offEditMode} value={status}/>
                </div>)}
    </div>
}