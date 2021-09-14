import React from "react";
import { Link } from "react-router-dom";

import Card from "../../../core_components/Card";

export default function Posters(props){
    const {movies} = props;

    return(
        <div className="wrap wrap--poster">{
            movies.map(movie => 
                <Link 
                    key={movie.id}
                    className="movie" 
                    to={`/movies/${movie.id}`}
                >
                    <Card 
                        class_name_mood="poster"
                        poster={movie.poster_path? movie.poster_path:null}
                    />
                </Link>
            )
        }</div>
    )
}