import React from 'react';
import {RouteHandler} from 'react-router';

class app extends React.Component {
  render() {
    return (
      <div>
        <h3 style={{"color": "green", "textAlign": "center"}}>Welcome Saller World!!!</h3>
        <RouteHandler />
      </div>
    );
  }
}

export default app;
