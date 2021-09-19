import { createActions } from 'redux-actions';

const types = {
    GENRES_FETCH: 'movies/genres/FETCH_REQUEST',
    GENRES_RECEIVED: 'movies/genres/FETCH_SUCCESS',
    GENRES_FETCH_FAIL: 'movies/genres/FETCH_FAIL',
    COMMON_MOVIES_FETCH: 'common/movies/FETCH_REQUEST',
    COMMON_MOVIES_RECEIVED: 'common/movies/FETCH_SUCCESS',
    COMMON_MOVIES_FETCH_FAIL: 'common/movies/FETCH_FAIL',
};

const creators = createActions({
    [types.GENRES_FETCH]:() => ({}),
    [types.GENRES_RECEIVED]: genres => ({ genres }),
    [types.GENRES_FETCH_FAIL]: error => ({ error }),
    [types.COMMON_MOVIES_FETCH]:(genre_id) => ({genre_id}),
    [types.COMMON_MOVIES_RECEIVED]: common_movies => ({common_movies}),
    [types.COMMON_MOVIES_FETCH_FAIL]: error => ({ error })
});

const actions = {
    fetchGenres: creators.movies.genres.fetchRequest,
    receiveGenres: creators.movies.genres.fetchSuccess,
    fetchCommonMovies: creators.common.movies.fetchRequest,
    receiveCommonMovies: creators.common.movies.fetchSuccess
};

export default actions;

export {types};