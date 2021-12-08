import React from 'react';
import s from './Users.module.css';
import userPhoto from './Img/default-user.jpg'
import {UserType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

type PresentUsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
    toggleFollow: (id: number) => void
    users: UserType[]
}

export const Users = (props: PresentUsersPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(i => <button onClick={() => props.onPageChanged(i)}
                className={props.currentPage === i ? s.selected : ''}>{i}</button>)}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        <button onClick={() => {
                            debugger
                            axios.get(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': 'ecad3ae6-8083-4154-b722-6cea4b99f288'
                                }
                            }).then(response => {
                                if (u.followed) {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'ecad3ae6-8083-4154-b722-6cea4b99f288'
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.toggleFollow(u.id)
                                        }
                                    })
                                } else {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},{
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'ecad3ae6-8083-4154-b722-6cea4b99f288'
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.toggleFollow(u.id)
                                        }
                                    })
                                }
                            })
                        }}>{u.followed ? 'Follow' : 'Unfollow'}</button>
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}






































