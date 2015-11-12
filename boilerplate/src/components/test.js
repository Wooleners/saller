import React from 'react';
import {RouteHandler} from 'react-router';
import testActions from '../actions/testActions';
import testStores from '../stores/testStores';

class test extends React.Component {
  constructor(props) {
    super(props);
  }

  btnClick() {
    location.href = "#index";
  }

  render() {
    return (
      <div style={{"color": "orange", "textAlign": "center"}}>this is test!
        <button onClick={this.btnClick}>go index</button>
      </div>
    );
  }
}

export default test;
