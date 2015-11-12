import alt from '../alt';
import React from 'react';
import indexActions from '../actions/indexActions';

class testStores {
  constructor() {
    this.bindActions(indexActions);
  }

  onGetInfoSuccess(result){

  }

  onGetInfoFail(result){

  }
}

export default alt.createStore(indexStores);
