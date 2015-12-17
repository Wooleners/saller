import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import { items } from './items';

const rootReducer = combineReducers({
  routing: routeReducer,
  /* your reducers */
  items,
});

export default rootReducer;
