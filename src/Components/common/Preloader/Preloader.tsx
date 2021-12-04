import loading from '../../Users/Img/loading-buffering.gif';
import React from 'react';


export const Preloader = () => {
    return (
        <div>
            <img style={{width: '25px', backgroundColor: 'black'}} src={loading}/>
        </div>
    )
}