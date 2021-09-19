import React,  { Suspense, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';

import Poster from "../../../../core_components/Poster";

import actions from '../../actions';

import useOnScreen from "../../../../utils/useIntersection";

export default function GenreSection({id, name}){
    const { fetchCommonMovies } = actions;
    const { common_movies } = useSelector((state)=>state.genres);

    const ref = useRef()
    const isVisible = useOnScreen(ref)
    const dispatch = useDispatch();
    useEffect(()=>{
        isVisible && dispatch(
            fetchCommonMovies(id)
        )
    },[dispatch, fetchCommonMovies, id, isVisible])

    return(
        <Suspense fallback={<div>Loading...</div>}>
            <div id={`${id}`} ref={ref} className="section section--genre">
                <div className="section__heading"> 
                    {name.toUpperCase()}
                </div>
                {isVisible && <div className="wrap wrap--posters">{
                    common_movies[id] && common_movies[id].map(movie => 
                        <Poster
                            key={movie.id}
                            movie={movie}
                        />
                    )
                }</div>}
            </div>
        </Suspense>
    )
}
