import React, { Suspense } from 'react';

const Home = React.lazy(() => 
    import ('./../pages/Home'));

const routes = [
    {
        name: 'home',
        path: '/',
        component: ()=>
            <Suspense fallback={<div>Loading...</div>}>
                <Home/>
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
