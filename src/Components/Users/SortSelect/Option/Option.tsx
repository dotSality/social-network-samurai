import s from './Option.module.scss';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../../../../bll/hooks';
import {fetchUsers} from '../../../../bll/users-reducer';

type OptionPropsType = {
    value: number;
    setCount: (count: number) => void
}

export const Option = ({value, setCount}: OptionPropsType) => {

    const dispatch = useAppDispatch()

    const fetchData = useAppSelector(state => state.usersPage.fetchData)
    // const pageSize = useAppSelector(state => state.usersPage.pageSize)

    // const setCountButtonOnClick = () => setCount(value)

    const fetchDataButtonOnClick = () => {
        setCount(value)
        dispatch(fetchUsers({currentPage: fetchData.page, pageSize: value}))
    }

    return <div onClick={fetchDataButtonOnClick} className={s.item}>{value}</div>
}