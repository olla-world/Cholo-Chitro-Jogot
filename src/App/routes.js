import React from 'react';

import Home from '../pages/Home';
import GenreDetail from '../pages/GenreDetail';
import MovieDetail from '../pages/MovieDetail';

const routes = [
    {
        name: 'home',
        path: '/',
        component: () => <Home/>,
        exact: true
    },{
        name: 'genre-detail',
        path: '/genre/:genre_id',
        component: () => <GenreDetail/>,
        exact: true
    },{
        name: 'movie-detail',
        path: '/movies/:movie_id',
        component: () => <MovieDetail/>,
        exact: true
    }
];

function routePath(name) {
    let route = routes.find(route => route.name === name);
  
    if (route === undefined) return '';
    return route.path;
}
  
export default routes;

export { routePath };
