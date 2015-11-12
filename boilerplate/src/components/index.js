import React from 'react';
import {RouteHandler} from 'react-router';
import indexActions from '../actions/indexActions';
import indexStore from '../stores/indexStore';

class index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>this is index!</div>
    );
  }
}

export default index;
