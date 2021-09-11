import { createActions } from 'redux-actions';

const types = {
    GENRES_FETCH: 'movies/genres/FETCH_REQUEST',
    GENRES_RECEIVED: 'movies/genres/FETCH_SUCCESS',
    GENRES_FETCH_FAIL: 'movies/genres/FETCH_FAIL',
};

const creators = createActions({
    [types.GENRES_FETCH]:() => ({}),
    [types.GENRES_RECEIVED]: genres => ({ genres }),
    [types.GENRES_FETCH_FAIL]: error => ({ error })
});

const actions = {
    fetchGenres: creators.movies.genres.fetchRequest,
    receiveGenres: creators.movies.genres.fetchSuccess
};

export default actions;

export {types};