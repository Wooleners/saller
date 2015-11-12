import alt from '../alt';
import React from 'react';
import indexActions from '../actions/indexActions';

class indexStores {
  constructor() {
    this.bindActions(indexActions);
  }

  onGetInfoSuccess(result){

  }

  onGetInfoFail(result){

  }
}

export default alt.createStore(indexStores);
