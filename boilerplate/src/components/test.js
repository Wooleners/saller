import React from 'react';
import {RouteHandler} from 'react-router';
import testActions from '../actions/testActions';
import testStore from '../stores/testStore';

class test extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>this is test!</div>
    );
  }
}

export default test;
