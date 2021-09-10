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

export default routes;
