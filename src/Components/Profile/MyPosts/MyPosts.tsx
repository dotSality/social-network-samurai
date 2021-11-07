import React from "react";
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {PostType} from '../../../redux/state';

export type PostsPropsType = {
    PostsPropsType: Array<PostType>
}

const MyPosts = (props: PostsPropsType) => {

    let postsElements = props.PostsPropsType.map(p => (<Post id={p.id} post={p.post} likesCount={p.likesCount}/>))

    // // let newPostElement = React.createRef()
    //
    // const addPost = () => {
    //     let text = newPostElement.current.value
    //     alert(text)
    // }

    return (<div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea placeholder={'Write something...'}></textarea>
            </div>
            <div>
                <button>add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>)
}

export default MyPosts;