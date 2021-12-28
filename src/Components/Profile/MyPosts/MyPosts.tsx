import React from "react";
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';
import {AddPostForm} from './AddPostForm/AddPostForm';

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => (<Post key={p.id} id={p.id} post={p.post} likesCount={p.likesCount}/>))

    const onSubmit = (text: string) => props.addPost(text)

    return (<div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <AddPostForm onSubmit={onSubmit}/>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>)
}

export default MyPosts;