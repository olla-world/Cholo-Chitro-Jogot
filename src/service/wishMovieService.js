import  {getFromLocalStorage, setInLocalStorage} from './../utils/localStorage';

const getAllMovies = () => {
    const current_movies = getFromLocalStorage(process.env.REACT_APP_MOVIES_LOCALSTORAGE);
    return current_movies;
}

const getMovieStatus = (movie_id) => {
    const current_movies = getFromLocalStorage(process.env.REACT_APP_MOVIES_LOCALSTORAGE);
    return current_movies.some(movie=>movie.id === movie_id)
}

const getMoviesCount = () => {
    const current_movies = getFromLocalStorage(process.env.REACT_APP_MOVIES_LOCALSTORAGE);
    return current_movies.length;
}

const updateMovies = (new_movie) => {
    const current_movies = getFromLocalStorage(process.env.REACT_APP_MOVIES_LOCALSTORAGE);
    const current_movies_count = getMoviesCount();
    const is_wish_already_in =  current_movies_count>0 ? current_movies.findIndex(wish=>wish.id === new_movie.id):-1;

    if( is_wish_already_in > -1 ) {
        setInLocalStorage(
            process.env.REACT_APP_MOVIES_LOCALSTORAGE,
            [
                ...current_movies.slice(0, is_wish_already_in),
                ...current_movies.slice(is_wish_already_in + 1)
            ]
        );

        return 'removed';
    }else {
        setInLocalStorage( 
            process.env.REACT_APP_MOVIES_LOCALSTORAGE,
            [...current_movies, new_movie] 
        );

        return 'added';
    }
}


export {getAllMovies, getMovieStatus, getMoviesCount, updateMovies};