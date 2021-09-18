import React, { Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import actions from './actions';
    
const GenreList = React.lazy(()=>
    import ('./components/GenreList'))

export default function Home(){
    const { fetchGenres } = actions;
    const { genres } = useSelector((state)=>state.genres);
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(
            fetchGenres()  
        )
    },[dispatch, fetchGenres])

    return(
        <div className="container container--home">
            <Suspense fallback={<div>Loading...</div>}>
                <GenreList genres={genres}/>
            </Suspense>
        </div>
    )
}