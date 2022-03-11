import React, {memo, useEffect, useState} from 'react';
import s from './SortSelect.module.scss';
import {useAppDispatch, useAppSelector} from '../../../bll/hooks';
import {Option} from './Option/Option';
import {fetchUsers} from '../../../bll/users-reducer';

const pageSizeFilterValues: number[] = [3, 5, 7, 10, 20]

export const SortSelect = memo(() => {

    // const dispatch = useAppDispatch()
    const pageSize = useAppSelector(state => state.usersPage.pageSize)
    // const fetchData = useAppSelector(state => state.usersPage.fetchData)
    const [count, setCount] = useState<number>(pageSize)
    const [isShow, setIsShow] = useState<boolean>(false)
    const onShowSelectOnClick = () => setIsShow(true)
    const onHideSelectOnClick = () => {
        if (isShow) {
            setIsShow(false)
        }
    }

    const selectClassName = `${s.select} ${isShow && s.active}`

    useEffect(() => {
        isShow && window.addEventListener('click', onHideSelectOnClick)
        return () => {
            window.removeEventListener('click', onHideSelectOnClick)
        }
    }, [isShow])

    // const fetchDataButtonOnClick = () => {
    //     setIsShow(false)
    //     dispatch(fetchUsers({currentPage: fetchData.page, pageSize: count}))
    // }

    return (
        <div className={selectClassName} onClick={onShowSelectOnClick}>
            {count}
            {isShow && <div className={s.options}>
                {pageSizeFilterValues.map(el => <Option key={el} value={el} setCount={setCount}/>)}
            </div>}
        </div>
    )
})