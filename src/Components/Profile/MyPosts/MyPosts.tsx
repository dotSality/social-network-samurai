import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';

//
// export type MyPostsPropsType = {
//     posts: Array<PostType>
//     updateNewPostText: (text: string) => void
//     addPost: () => void
//     messageForNewPost: string
// }

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => (<Post key={p.id} id={p.id} post={p.post} likesCount={p.likesCount}/>))


    const addPost = () => {
        props.addPost(props.messageForNewPost);
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