import { put } from "@redux-saga/core/effects";
import axios from "axios";

import actions from "./actions";

function* fetchPopularMovies({payload}){
    const genre_popular_movies = yield axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/${process.env.REACT_APP_API_VERSION}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=${process.env.REACT_APP_API_QUERY_LANGUAGE}&sort_by=popularity.desc&page=1&with_genres=${payload.genre_id}`
    ).then(response => response.data.results)
    
    yield put(actions.receivePopularMovies(genre_popular_movies))
}

export { fetchPopularMovies };