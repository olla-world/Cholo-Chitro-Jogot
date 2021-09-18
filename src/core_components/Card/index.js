import React from 'react';

export default function Card(props){
    const { class_name_mod='', poster=null, imageOnLoad=null } = props;

    return(
        <div className={`card card--${class_name_mod}`}>
            {poster && 
            <div className="card__body">
                <img 
                    src={`${process.env.REACT_APP_POSTER_BASE_URL}/${process.env.REACT_APP_POSTER_SIZE}/${poster}`}
                    alt="poster"
                    loading="lazy"
                    onLoad={()=>imageOnLoad? imageOnLoad(): console.log("poster is loaded")}
                />  
            </div>}
        </div>
    )
}