import alt from '../alt';

class testActions {
  constructor() {
    this.generateActions(
      'getInfoSuccess',
      'getInfoFail'
    );
  }

  getData() {

  }
}

export default alt.createActions(testActions);
