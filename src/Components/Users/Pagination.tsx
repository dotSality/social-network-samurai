import s from './Users.module.scss';
import React from 'react';
import {useAppSelector} from '../../bll/hooks';

type PropsType = {
    onPageChanged: (i: number, pageSize: number) => void,
    currentPage: number,
    totalUsersCount: number,
    pageSize: number,
}


export const Pagination = ({currentPage, onPageChanged, totalUsersCount, pageSize}: PropsType) => {

    const {status} = useAppSelector(state => state.app)
    const pages = []
    const prevTwoPages = () => onPageChanged(currentPage - 2, pageSize)
    const nextTwoPages = () => onPageChanged(currentPage + 2, pageSize)
    const onFirstPageChange = () => onPageChanged(1, pageSize)
    const onLastPageChange = () => onPageChanged(pagesCount, pageSize)

    const pagesCount = Math.ceil(totalUsersCount / pageSize)

    const divClassName = status === 'loading' ? s.disable : ''

    if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
            pages.push(i)
        }
        return <div className={divClassName}>
            {pages.map(i => <button key={i} onClick={() => onPageChanged(i, pageSize)}
                className={currentPage === i ? s.selected : ''}>{i}</button>)
            }
            <button onClick={nextTwoPages}>»</button>
            <button onClick={onLastPageChange}>...</button>
        </div>
    } else if (currentPage >= 4 && currentPage <= pagesCount - 4) {
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            pages.push(i)
        }
        return <div className={divClassName}>
            <button onClick={onFirstPageChange}>{1}</button>
            <button onClick={prevTwoPages}>«</button>
            {pages.map(i => <button key={i} onClick={() => onPageChanged(i, pageSize)}
                className={currentPage === i ? s.selected : ''}>{i}</button>)
            }
            <button onClick={nextTwoPages}>»</button>
            <button onClick={onLastPageChange}>...</button>
        </div>
    } else {
        for (let i = pagesCount - 4; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <div className={divClassName}>
            <button onClick={onFirstPageChange}>{1}</button>
            <button onClick={prevTwoPages}>«</button>
            {pages.map(i => <button key={i} onClick={() => onPageChanged(i, pageSize)}
                className={currentPage === i ? s.selected : ''}>{i}</button>)
            }
        </div>
    }
}