import React from "react";
import { useParams } from 'react-router-dom';

export default function GenreDetail(props){
    let { genre_id } = useParams();

    return(
        <div className="container container--genre-detail">
            {genre_id}
        </div>
    )
}