import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './Users.module.css';
import axios from 'axios';
import userPhoto from './Img/default-user.jpg'

export class Users extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);

    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(
            response => {
                this.props.setUsers(response.data.items);
            }
        );
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(
            response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            }
        );
    }


    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {pages.map(i => <button onClick={() => this.onPageChanged(i)}
                    className={this.props.currentPage === i ? s.selected : ''}>{i}</button>)}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small ? u.photos.small : userPhoto} className={s.userPhoto}/>
                    </div>
                    <div>
                        <button onClick={() => this.props.toggleFollow(u.id)}>{u.followed ? 'Follow' : 'Unfollow'}</button>
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

}