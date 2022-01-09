import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileStatus = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect(() => {
        setStatus(props.status)
    },[props.status])

    const onEditMode = () => setEditMode(true)

    const offEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
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