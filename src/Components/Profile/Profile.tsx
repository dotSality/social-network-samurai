import React from "react";
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (<div className={s.content}>
        <img src='https://c4.wallpaperflare.com/wallpaper/784/819/740/ultra-wide-photography-beach-wallpaper-preview.jpg'/>
        <div>
            ava + description
        </div>
        <MyPosts />
    </div>)
}

export default Profile;