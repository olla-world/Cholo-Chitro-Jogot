import { createActions } from 'redux-actions';

const types = {
    MOVIE_DETAIL_FETCH: 'movie/detail/FETCH_REQUEST',
    MOVIE_DETAIL_RECEIVED: 'movie/detail/FETCH_SUCCESS',
    MOVIE_DETAIL_FETCH_FAIL: 'movie/detail/FETCH_FAIL',
};

const creators = createActions({
    [types.MOVIE_DETAIL_FETCH]:(movie_id) => ({movie_id}),
    [types.MOVIE_DETAIL_RECEIVED]: movie_detail => ({ movie_detail }),
    [types.MOVIE_DETAIL_FETCH_FAIL]: error => ({ error })
});

const actions = {
    fetchMovieDetail: creators.movie.detail.fetchRequest,
    receiveMovieDetail: creators.movie.detail.fetchSuccess
};

export default actions;

export {types};