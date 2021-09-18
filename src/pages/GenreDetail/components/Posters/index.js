import React, { Suspense } from "react";

import Poster from './../Poster';

export default function Posters(props){
    const {movies} = props;

    return(
        <div className="wrap wrap--posters">
            <Suspense fallback={<h1>Loading movie...</h1>}>{
                movies.map(movie => 
                    <Poster
                        key={movie.id}
                        movie={movie}
                    />
                )
            }</Suspense>
        </div>
    )
}