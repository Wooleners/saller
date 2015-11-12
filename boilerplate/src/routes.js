import React from 'react';
import {Route, DefaultRoute, NotFoundRoute, Redirect} from 'react-router';
import app from './components/app';
import indexActions from './actions/indexActions';
import indexStores from './stores/indexStores';
import testActions from './actions/testActions';
import testStores from './stores/testStores';

export default (
    <Route path="/" handler={app}>
        <DefaultRoute handler={indexActions} />
        <Route path='/index' handler={indexActions} />
        <Route path='/test' handler={testActions} />
        <Redirect to="/index" />
    </Route>
);
