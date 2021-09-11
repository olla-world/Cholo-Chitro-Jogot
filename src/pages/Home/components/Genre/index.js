import React from 'react'
import { Link } from "react-router-dom";

export default function Genre(props){
    const { id, name } = props;

    return(
        <Link 
            className="genre" 
            to={`/genre/${id}`}
        >
            {name}
        </Link>
    )
}
