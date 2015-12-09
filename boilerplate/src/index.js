import React from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import { Router, Redirect } from 'react-router';
import configureStore from './store/configureStore';
import Root from './containers/root';
import { syncReduxAndRouter } from 'redux-simple-router';

const store = configureStore();
const history = createBrowserHistory({
  queryKey: false
});

syncReduxAndRouter(history, store);

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
