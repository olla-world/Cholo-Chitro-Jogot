import { createActions } from 'redux-actions';

const types = {
    POPULAR_MOVIES_FETCH: 'genre/popular/movies/FETCH_REQUEST',
    POPULAR_MOVIES_RECEIVED: 'genre/popular/movies/FETCH_SUCCESS',
    POPULAR_MOVIES_FETCH_FAIL: 'genre/popular/movies/FETCH_FAIL',
};

const creators = createActions({
    [types.POPULAR_MOVIES_FETCH]:(genre_id) => ({genre_id}),
    [types.POPULAR_MOVIES_RECEIVED]: genre_popular_movies => ({ genre_popular_movies }),
    [types.POPULAR_MOVIES_FETCH_FAIL]: error => ({ error })
});

const actions = {
    fetchPopularMovies: creators.genre.popular.movies.fetchRequest,
    receivePopularMovies: creators.genre.popular.movies.fetchSuccess
};

export default actions;

export {types};