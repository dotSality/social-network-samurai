import React from "react";
import s from './Post.module.css'

type PostProps = {
    message: string,
    likes: number,
}

const Post = (props: PostProps) => {
    return (<div className={s.item}>
        <img src={'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'}/>
        {props.message}
        <div>
            <span>likes:{props.likes}</span>
            <span><button>like</button></span>
        </div>
    </div>)
}

export default Post;