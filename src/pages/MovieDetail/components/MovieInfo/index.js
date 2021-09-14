import React from "react";

import Card from "../../../../core_components/Card";

export default function MovieInfo (props){
    const { original_title, tagline, vote_average, backdrop_path, poster_path ,overview } = {...props};
    const imgae_url = backdrop_path ? `${process.env.REACT_APP_POSTER_BASE_URL}/${process.env.REACT_APP_BACKDROP_SIZE}${backdrop_path}` : './../assets/background.jpg';

    return(
        <div 
            className="info info--movie" 
            style={{backgroundImage: `url("${imgae_url}")`}}
        >
            <div className="movie">
                <div className="movie__poster">
                    <Card 
                        class_name_mood="poster"
                        poster={poster_path? poster_path:null}
                    />
                </div>

               <div className="movie__info">
                    <div className="movie__info__basic">
                        {original_title && <div className="name">{original_title}</div>}
                        {tagline && <div className="tagline">{tagline}</div>}
                        {vote_average && 
                            <div className="imdb-raitng">
                                <div className="tag">Rating:</div> 
                                <div className="vaue"> 
                                    {vote_average}
                                </div>
                            </div>
                        }
                    </div>
                    
                    {overview && <div className="movie__info__overview">{overview}</div>}
               </div>
            </div>
        </div>
    )
}