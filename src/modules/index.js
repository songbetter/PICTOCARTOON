import { combineReducers } from 'redux';
import orderReducer from './order';

const rootReducer = combineReducers({
  orderReducer,
});

export default rootReducer;
