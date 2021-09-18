
import React from 'react';
import { Provider } from 'react-redux';

import Router from './components/Router';
import NavBar from './components/NavBar';

import routes, { routePath } from './routes';
import store, { history } from './store';

const navLinks = [
    { 
        text: 'Cholo-Chitro Jogot', 
        href: routePath('home'), 
        type: 'brand',
    },{
        text: 'Watch List', 
        href: routePath('watch-list'), 
        type: 'nav-menu',
    }
];

const App = props => (
    <Provider store={store}>
        <Router history={history} routes={routes}>
            <NavBar links={navLinks} />
        </Router>
    </Provider>
);
  
export default App;
  