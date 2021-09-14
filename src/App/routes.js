import React, { Suspense } from 'react';

const Home = React.lazy(() => 
    import ('./../pages/Home'));

const GenreDetail = React.lazy(()=>
    import ('./../pages/GenreDetail'))

const MovieDetail = React.lazy(()=>
    import ('./../pages/MovieDetail'))

const routes = [
    {
        name: 'home',
        path: '/',
        component: ()=>
            <Suspense fallback={<div>Loading...</div>}>
                <Home/>
            </Suspense>,
        exact: true
    },{
        name: 'genre-detail',
        path: '/genre/:genre_id',
        component: ()=>
            <Suspense fallback={<div>Loading...</div>}>
                <GenreDetail/>
            </Suspense>,
        exact: true
    },{
        name: 'movie-detail',
        path: '/movies/:movie_id',
        component: ()=>
            <Suspense fallback={<div>Loading...</div>}>
                <MovieDetail/>
            </Suspense>,
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
