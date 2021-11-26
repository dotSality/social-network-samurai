import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './Users.module.css';

export const Users = (props: UsersPropsType) => {

    if (props.users.length === 0)
        props.setUsers(
            [
                {
                    id: 1, avatar: 'https://avatarfiles.alphacoders.com/184/thumb-184458.jpg',
                    followed: false, fullName: 'Maxim', status: 'I am the boss!', location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2, avatar: 'https://avatarfiles.alphacoders.com/184/thumb-184458.jpg',
                    followed: true, fullName: 'Dmitriy', status: 'The best!', location: {city: 'Kiev', country: 'Ukraine'}
                },
                {
                    id: 3, avatar: 'https://avatarfiles.alphacoders.com/184/thumb-184458.jpg',
                    followed: true, fullName: 'Yury', status: 'Top!', location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 4, avatar: 'https://avatarfiles.alphacoders.com/184/thumb-184458.jpg',
                    followed: false, fullName: 'Evgeniy', status: 'Hi...', location: {city: 'Moscow', country: 'Russia'}
                }
            ]
        )

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.avatar} className={s.userPhoto}/>
                    </div>
                    <div>
                        <button onClick={() => props.toggleFollow(u.id)}>{u.followed ? 'Follow' : 'Unfollow'}</button>
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)
        }
    </div>

}