import React, {memo, useEffect, useState} from 'react';
import s from './SortSelect.module.scss';
import {useAppSelector} from '../../../bll/hooks';
import {Option} from './Option/Option';

const pageSizeFilterValues: number[] = [3, 5, 7, 10, 20]

export const SortSelect = memo(() => {

    const pageSize = useAppSelector(state => state.usersPage.pageSize)
    const [count, setCount] = useState<number>(pageSize)
    const [isShow, setIsShow] = useState<boolean>(false)
    const onShowSelectOnClick = () => setIsShow(true)
    const onHideSelectOnClick = () => {
        if (isShow) {
            setIsShow(false)
        }
    }

    useEffect(() => {
        isShow && window.addEventListener('click', onHideSelectOnClick)
        return () => {
            window.removeEventListener('click', onHideSelectOnClick)
        }
    }, [isShow])

    const selectClassName = `${s.select} ${isShow && s.active}`

    return (
        <div className={selectClassName} onClick={onShowSelectOnClick}>
            {count}
            {isShow && <div className={s.options}>
                {pageSizeFilterValues.map(el => <Option key={el} value={el} setCount={setCount}/>)}
            </div>}
        </div>
    )
})