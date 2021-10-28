import React from "react";
import s from './ProfileInfo.module.css'



const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://c4.wallpaperflare.com/wallpaper/784/819/740/ultra-wide-photography-beach-wallpaper-preview.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;