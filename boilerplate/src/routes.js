import React from 'react';
import {Route, DefaultRoute, NotFoundRoute, Redirect} from 'react-router';
import app from './components/app';
import index from './components/index';
import test from './components/test';

export default (
    <Route path="/" handler={app}>
        <DefaultRoute handler={index} />
        <Route path='/index' handler={index} />
        <Route path='/test' handler={test} />
        <Redirect to="/index" />
    </Route>
);
