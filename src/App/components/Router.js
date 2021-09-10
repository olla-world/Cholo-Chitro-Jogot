import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

const Router = ({ routes, children }) => (
    <BrowserRouter>
        {children}
        <Switch>
            {routes.map((route, i) => (
                <Route
                    key={i}
                    exact={route.exact}
                    path={route.path}
                    render={() => 
                        <route.component  routes={route.routes} />
                    }
                />
            ))}
        <Route 
            path="*" 
            render={() => 
                <h1>404! Not Found</h1>
            } 
        />
        </Switch>
    </BrowserRouter>
);

export default Router;