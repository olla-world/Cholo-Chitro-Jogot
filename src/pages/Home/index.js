import React, { Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import actions from './actions';
    
const GenreList = React.lazy(()=>
    import ('./components/GenreList'))
const GenreSection = React.lazy(()=>
    import ('./components/GenreSection'))

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

            <Suspense fallback={<div>Loading...</div>}>
            {
                genres.length>0 && genres.map(
                    genre => <GenreSection  key={genre.id}  {...genre}/>
                )
            }
            </Suspense>
        </div>
    )
}