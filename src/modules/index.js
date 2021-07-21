import { combineReducers } from 'redux';
import orderReducer from './order';
import validationReducer from './validation';

const rootReducer = combineReducers({
  orderReducer,
  validationReducer,
});

export default rootReducer;
