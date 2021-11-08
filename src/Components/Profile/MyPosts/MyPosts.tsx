import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {PostType} from '../../../redux/state';

export type PostsPropsType = {
    PostsPropsType: Array<PostType>
    addPost: () => void
    messageForNewPost: string
    updateNewPostText: (newText: string) => void
}

const MyPosts = (props: PostsPropsType) => {

    let postsElements = props.PostsPropsType.map(p => (<Post id={p.id} post={p.post} likesCount={p.likesCount}/>))

    const addPost = () => {
        props.addPost()
    }

    const updateNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (<div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea
                    placeholder={'Write something...'}
                    value={props.messageForNewPost}
                    onChange={updateNewPostText}
                />

            </div>
            <div>
                <button onClick={addPost}>add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>)
}

export default MyPosts;