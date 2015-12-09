import React from 'react';
import { Link } from 'react-router';

export class AboutView extends React.Component {

  render () {
    return (
      <div>
        <h1>Welcome to About!!!</h1>
        <Link to='/'>Go To Home View</Link>
      </div>
    );
  }
}

export default AboutView;
