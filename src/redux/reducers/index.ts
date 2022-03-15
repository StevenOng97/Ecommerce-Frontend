import { combineReducers } from 'redux';

import products from './products';
import auth from './auth';
const rootReducer = combineReducers({
  products,
  auth,
});

export default rootReducer;
