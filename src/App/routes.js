const routes = [
    {
        name: 'home',
        path: '/',
        component: () => <h1>Home</h1>,
        exact: true
    },{
        name: 'test',
        path: '/test',
        component: () => <h1>Test</h1>,
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
