import { combineReducers } from 'redux';
import orderReducer from './order';
import validationReducer from './validation';
import orderDetailReducer from './orderDetail';

const rootReducer = combineReducers({
  orderReducer,
  validationReducer,
  orderDetailReducer,
});

export default rootReducer;
