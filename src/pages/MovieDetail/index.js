import React, { Suspense, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import actions from './actions';

const MovieInfo = React.lazy(() => 
    import ("./components/MovieInfo"));

export default function MovieDetail(props){
    const { movie_id } = useParams();
    const { fetchMovieDetail } = actions;
    const { movie_detail, loading } = useSelector((state)=>{console.log(state);return state.movie_detail});
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(
            fetchMovieDetail(movie_id)  
        )
    },[dispatch, fetchMovieDetail, movie_id])

    const {credits, similar, production_companies, production_countries, ...movie_info } = {...movie_detail}

    return(
        <div className="container container--movie-detail">{
            <Suspense fallback={<h1>Loading movies...</h1>}>
                <MovieInfo {...movie_info} />
            </Suspense>
        }</div>
    )
}