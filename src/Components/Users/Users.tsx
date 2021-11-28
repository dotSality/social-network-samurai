import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './Users.module.css';
import axios from 'axios';
import userPhoto from './Img/default-user.jpg'

export const Users = (props: UsersPropsType) => {

    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(
                response => {
                    props.setUsers(response.data.items)
                }
            )
        }
    }

    // if (props.users.length === 0) {
    //     axios.get('https://social-network.samuraijs.com/api/1.0/users').then(
    //         response => {
    //             props.setUsers(response.data.items)
    //         }
    //     )
    // }

    return <div>
        <button onClick={getUsers}>get users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small ? u.photos.small : userPhoto} className={s.userPhoto}/>
                    </div>
                    <div>
                        <button onClick={() => props.toggleFollow(u.id)}>{u.followed ? 'Follow' : 'Unfollow'}</button>
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.city'}</div>
                        <div>{'u.location.country'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>

}