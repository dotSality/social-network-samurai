import React from "react";
import s from './Post.module.css'
import {PostType} from '../../../../bll/profile-reducer';

const Post = (props: PostType) => {
    return (<div className={s.item}>
        <img
            src={'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'}
            alt={'avatar'}/>
        {props.post}
        <div>
            <div>
                likes:{props.likesCount}
                <button>like</button>
                <button>x</button>
            </div>
        </div>
    </div>)
}

export default Post;