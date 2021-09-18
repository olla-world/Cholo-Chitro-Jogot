import React, { useState } from "react";
import { Link } from "react-router-dom";

import Card from "../../../../core_components/Card";
import WishButton from "../../../../core_components/Button";

import { getMovieStatus, updateMovies } from '../../../../service/wishMovieService';

export default function Poster(props){
    const { movie } = props;

    const [display_wisth_button, setDisplayWishButton] = useState(false);
    const [status_wish_button, setStatusWishButton]=useState(getMovieStatus(movie.id))

    const buttonAction = (data) => {
        const status = updateMovies(data);
        if(status === 'removed')setStatusWishButton(false);
        else setStatusWishButton(true);
    }
    const posterOnloadAction = () => setDisplayWishButton(true);

    return(
        <div className = "wrap wrap--poster">
            <Link 
                className="link link--movie" 
                to={`/movies/${movie.id}`}
            >
                <Card 
                    class_name_mod="poster"
                    poster={movie.poster_path? movie.poster_path:null}
                    imageOnLoad={posterOnloadAction}
                />
            </Link>{
            display_wisth_button &&
            <WishButton 
                class_name_mod="wish"
                action = { buttonAction }
                data = { movie }
            >
                <div>{status_wish_button? `Remove From`: `Add To`} Wishlist</div>
            </WishButton>
        }</div>
    )
}