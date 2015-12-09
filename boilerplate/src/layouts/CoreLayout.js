import React from 'react';

export default class CoreLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  render () {
    return (
      <div className='page-container'>
        <div>Welcome to saller!!</div>
        <div className='view-container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
