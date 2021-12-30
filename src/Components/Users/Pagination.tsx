import s from './Users.module.css';
import React from 'react';

type PaginationType = {
    pagesCount: number,
    onPageChanged: (i: number) => void,
    currentPage: number,
}


export const Pagination = (props: PaginationType) => {

    const pages = []
    const prevTwoPages = () => props.onPageChanged(props.currentPage - 2)
    const nextTwoPages = () => props.onPageChanged(props.currentPage + 2)
    const onFirstPageChange = () => props.onPageChanged(1)
    const onLastPageChange = () => props.onPageChanged(props.pagesCount)

    if (props.currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
            pages.push(i)
        }
        return <div>
            {pages.map(i => <button key={i} onClick={() => props.onPageChanged(i)}
                className={props.currentPage === i ? s.selected : ''}>{i}</button>)
            }
            <button onClick={nextTwoPages}>»</button>
            <button onClick={onLastPageChange}>...</button>
        </div>
    } else if (props.currentPage >= 4 && props.currentPage <= props.pagesCount - 4) {
        for (let i = props.currentPage - 1; i <= props.currentPage + 1; i++) {
            pages.push(i)
        }
        return <div>
            <button onClick={onFirstPageChange}>{1}</button>
            <button onClick={prevTwoPages}>«</button>
            {pages.map(i => <button key={i} onClick={() => props.onPageChanged(i)}
                className={props.currentPage === i ? s.selected : ''}>{i}</button>)
            }
            <button onClick={nextTwoPages}>»</button>
            <button onClick={onLastPageChange}>...</button>
        </div>
    } else {
        for (let i = props.pagesCount - 4; i <= props.pagesCount; i++) {
            pages.push(i)
        }
        return <div>
            <button onClick={onFirstPageChange}>{1}</button>
            <button onClick={prevTwoPages}>«</button>
            {pages.map(i => <button key={i} onClick={() => props.onPageChanged(i)}
                className={props.currentPage === i ? s.selected : ''}>{i}</button>)
            }
        </div>
    }
}