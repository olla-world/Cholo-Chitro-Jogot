import React, { Suspense, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import actions from './actions';

const Posters = React.lazy(() => 
    import ("./components/Posters"));

export default function GenreDetail(props){
    const { genre_id } = useParams();
    const { fetchPopularMovies } = actions;
    const { genre_popular_movies, loading } = useSelector((state)=>state.genre_popular_movies);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(
            fetchPopularMovies(genre_id)  
        )
    },[dispatch, fetchPopularMovies, genre_id])

    return(
        <div className="container container--genre-detail">{
            <Suspense fallback={<h1>Loading movies...</h1>}>
                <Posters movies={genre_popular_movies}/>
            </Suspense>
        }</div>
    )
}