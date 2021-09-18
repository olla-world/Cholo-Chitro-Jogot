import React, { Suspense, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import actions from './actions';

const Poster = React.lazy(()=>
    import ('./../../core_components/Poster'))

export default function GenreDetail(){
    const { genre_id } = useParams();
    const { fetchPopularMovies } = actions;
    const { genre_popular_movies } = useSelector((state)=>state.genre_popular_movies);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(
            fetchPopularMovies(genre_id)  
        )
    },[dispatch, fetchPopularMovies, genre_id])

    return(
        <div className="container container--genre-detail">
            <Suspense fallback={<div>Loading...</div>}>
                <div className="wrap wrap--posters">{
                    genre_popular_movies.map(movie => 
                        <Poster
                            key={movie.id}
                            movie={movie}
                        />
                    )
                }</div>
            </Suspense>
        </div>
    )
}