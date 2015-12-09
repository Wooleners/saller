import React from 'react';
import { Link } from 'react-router';
import styles from '../styles/index.less'

export class HomeView extends React.Component {

  render () {
    return (
      <div>
        <h1>Welcome to Home!!!</h1>
        <Link to='/about'>Go To About View</Link>
      </div>
    );
  }
}

export default HomeView;
