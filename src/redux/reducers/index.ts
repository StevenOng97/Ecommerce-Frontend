import { combineReducers } from 'redux';

import products from './products';
import auth from './auth';
import modal from './modal';

const rootReducer = combineReducers({
  products,
  auth,
  modal
});

export default rootReducer;
