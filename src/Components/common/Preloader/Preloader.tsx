import loading from '../../Users/Img/loading-buffering.gif';
import React from 'react';


export const Preloader = () => {
    return (
        <div>
            <img style={{width: '250px'}} src={loading} alt={'preloader'}/>
        </div>
    )
}