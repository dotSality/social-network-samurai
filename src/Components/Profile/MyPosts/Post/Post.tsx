import React from "react";
import s from './Post.module.css'

const Post = () => {
    return (<div className={s.item}>
        <img src={'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'}/>
        Post 1
        <div>
            <span><button>like</button></span>
        </div>
    </div>)
}

export default Post;