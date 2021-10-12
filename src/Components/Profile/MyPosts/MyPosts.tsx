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
        <Post message={'Hi, how are you?'} likes={15}/>
        <Post message={'It\'s my first post'} likes={10}/>
    </div>)
}

export default MyPosts;