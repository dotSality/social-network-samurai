import React from "react";
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (<div>
        My posts
        <div>
            <textarea></textarea>
            <button>add post</button>
            <button>remove post</button>
        </div>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>)
}

export default MyPosts;