import alt from '../alt';
import React from 'react';
import testActions from '../actions/testActions';

class testStores {
  constructor() {
    this.bindActions(testActions);
  }

  onGetInfoSuccess(result){

  }

  onGetInfoFail(result){

  }
}

export default alt.createStore(testStores);
