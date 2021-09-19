import { put } from "@redux-saga/core/effects";
import axios from "axios";

import actions from "./actions";

function* fetchGenres(){
    const genres = yield axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/${process.env.REACT_APP_API_VERSION}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=${process.env.REACT_APP_API_QUERY_LANGUAGE}`
    ).then(response => response.data.genres)
    
    yield put(actions.receiveGenres(genres))
}

function* fetchCommonMovies({payload}){
    const common_movies = yield axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/${process.env.REACT_APP_API_VERSION}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=${process.env.REACT_APP_API_QUERY_LANGUAGE}&page=1&with_genres=${payload.genre_id}`
    ).then(response => response.data.results)
    
    yield put(actions.receiveCommonMovies({[payload.genre_id]: common_movies}))
}
export { fetchGenres, fetchCommonMovies };