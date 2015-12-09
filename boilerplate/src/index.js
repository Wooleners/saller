import React from 'react';
import { render } from 'react-dom';
import createHistory from 'history/lib/createHashHistory';
import { Provider } from 'react-redux';
import { Router, Redirect } from 'react-router';
import configureStore from './store/configureStore';
import routes from './routes';
import Root from './containers/root';
import { syncReduxAndRouter } from 'redux-simple-router';

const store = configureStore();
const history = createHistory({
  queryKey: false
});

syncReduxAndRouter(history, store);

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
