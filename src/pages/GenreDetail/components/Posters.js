import React from "react";

import Card from "../../../core_components/Card";

export default function Posters(props){
    const {movies} = props;

    return(
        <div className="wrap wrap--poster">{
            movies.map(movie => 
                <Card 
                    key={movie.id}
                    class_name_mood="poster"
                    poster={movie.poster_path? movie.poster_path:null}
                />
            )
        }</div>
    )
}