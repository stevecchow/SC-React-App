import React from 'react';
import { Route, Switch } from 'dva/router';

import Dashboard from '@/pages/App/Dashboard';
import Dva from '@/pages/App/Dva';

export default function RoutesIndex() {
    return (
        <Switch>
            <Route exact path="/App" component={Dashboard} />
            <Route exact path="/App/Dva" component={Dva} />
        </Switch>
    );
}
