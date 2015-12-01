import React from 'react';
import {RouteHandler} from 'react-router';
import indexActions from '../actions/indexActions';
import indexStores from '../stores/indexStores';

class index extends React.Component {
  constructor(props) {
    super(props);
  }

  btnClick() {
    location.href = "/test";
  }

  render() {
    return (
      <div style={{"color": "blue", "textAlign": "center"}}>this is index!
        <button onClick={this.btnClick}>go test</button>
      </div>
    );
  }
}

export default index;
