import React from 'react';
import {
    Route, Redirect, routerRedux, Switch,
} from 'dva/router';
import AppContainer from '@/routes/AppContainer';

const Router = routerRedux.ConnectedRouter;

export default function RouterConfig({ history }) {
    return (
        <Router
            history={history}
        >
            <Switch>
                <Route path="/App" component={AppContainer} />
                <Route path="/Login" component={() => 'login'} />
                <Route render={() => <Redirect to="/App" />} />
            </Switch>
        </Router>
    );
}
