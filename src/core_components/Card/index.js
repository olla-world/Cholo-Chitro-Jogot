import React from 'react';

export default function Card({class_name_mood='', poster=null}){
    return(
        <div className={`card card--${class_name_mood}`}>{
            poster && 
            <img 
                src={`${process.env.REACT_APP_POSTER_BASE_URL}/${process.env.REACT_APP_POSTER_SIZE}/${poster}`}
                alt="poster"
                loading="lazy"
            />  
        }</div>
    )
}