import React from "react";

import Genre from './../Genre';
    
export default function GenreList(props){
    const {genres} = props;
    return (
        <div className="list list--genre">{
            genres.map((genre)=>
                <Genre key={genre.id} name={genre.name}/>
        )}</div>
    )
};
