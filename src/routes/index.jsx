import React from 'react';
import {
    Route, routerRedux, Switch, Redirect,
} from 'dva/router';

import App from '@/pages/App';

import Login from '@/pages/Login';
import NotFound from '@/pages/Error/404';

const Router = routerRedux.ConnectedRouter;

export default function RouterConfig({ history }) {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/App" component={App} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/404" component={NotFound} />
                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        </Router>
    );
}
