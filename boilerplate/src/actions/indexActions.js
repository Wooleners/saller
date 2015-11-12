import alt from '../alt';

class indexActions {
  constructor() {
    this.generateActions(
      'getInfoSuccess',
      'getInfoFail'
    );
  }

  getData() {

  }
}

export default alt.createActions(indexActions);
