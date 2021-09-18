import React, { Suspense, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Posters from "./components/Posters";

import actions from './actions';

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
        <div className="container container--genre-detail">{
            <Suspense fallback={<h1>Loading movies...</h1>}>
                <Posters movies={genre_popular_movies}/>
            </Suspense>
        }</div>
    )
}