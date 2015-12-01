import React from 'react';
import Router from 'react-router';
import routes from './routes';
import styles from './styles/index.less';

//hash mode
// Router.run(routes, Router.HashLocation, function(Handler) {
//   React.render(<Handler />, document.getElementById('app'));
// });

//history mode
Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler />, document.getElementById('app'));
});
