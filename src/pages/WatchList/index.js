import React, { Suspense, useEffect, useState } from "react";
import { getAllMovies } from './../../service/wishMovieService';

const Poster = React.lazy(()=>
    import ('./../../core_components/Poster'))

export default function WatchList(){
    const [wish_movies, setWishMovies] = useState(getAllMovies())

    return(
        <div className="container container--genre-detail">
            <Suspense fallback={<div>Loading...</div>}>
                <div className="wrap wrap--posters">{
                    wish_movies.length? wish_movies.map(movie => 
                        <Poster
                            key={movie.id}
                            movie={movie}
                        />
                    )
                :<></>}</div>
            </Suspense>
        </div>
    )
}