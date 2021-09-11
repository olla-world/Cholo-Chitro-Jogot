import React from 'react'

export default function Genre(props){
    const { name } = props;

    return(
        <div className="genre">
            {name}
        </div>
    )
}
