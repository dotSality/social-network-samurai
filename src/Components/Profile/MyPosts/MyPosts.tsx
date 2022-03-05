import React from "react";
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {AddPostForm} from './AddPostForm/AddPostForm';
import {useAppDispatch, useAppSelector} from '../../../bll/hooks';
import {addPost} from '../../../bll/profile-reducer';

export const MyPosts = () => {
    const dispatch = useAppDispatch()
    const posts = useAppSelector(state => state.profilePage.posts)
    let postsElements = posts.map(({post, id, likesCount}) =>
        (<Post key={id} id={id} post={post} likesCount={likesCount}/>))

    const onSubmit = (text: string) => dispatch(addPost(text))

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