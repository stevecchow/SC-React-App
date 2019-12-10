import React from 'react';
import { Route, Switch } from 'dva/router';

import Workbench from '@/pages/Workbench';
import BaseInfoDetails from '@/pages/BaseInfo/Details';
import UserListAccount from '@/pages/UserList/Account';

export default function RoutesIndex() {
    return (
        <Switch>
            <Route exact path="/App" component={() => <Workbench />} />
            <Route path="/App/BaseInfoDetails" component={() => <BaseInfoDetails />} />
            <Route path="/App/UserListAccount" component={() => <UserListAccount />} />
        </Switch>
    );
}
