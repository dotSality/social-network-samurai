import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {PostActionType, PostType} from '../../../redux/state';

export type PostsPropsType = {
    PostsPropsType: Array<PostType>
    dispatch: (action: PostActionType) => void
    messageForNewPost: string
}

const MyPosts = (props: PostsPropsType) => {

    let postsElements = props.PostsPropsType.map(p => (<Post id={p.id} post={p.post} likesCount={p.likesCount}/>))

    const addPost = () => {
        props.dispatch({type: 'ADD-POST', postText: props.messageForNewPost})
    }

    const updateNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: e.currentTarget.value})
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