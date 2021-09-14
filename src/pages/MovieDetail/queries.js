import { put } from "@redux-saga/core/effects";
import axios from "axios";

import actions from "./actions";

function* fetchMovieDetail({payload}){
    const movie_detail = yield axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/${process.env.REACT_APP_API_VERSION}/movie/${payload.movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=${process.env.REACT_APP_API_QUERY_LANGUAGE}&append_to_response=similar,credits`
    ).then(response => response.data)
    
    yield put(actions.receiveMovieDetail(movie_detail))
}

export { fetchMovieDetail };