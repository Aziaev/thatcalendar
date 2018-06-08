import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import toggler from './toggler';

export default combineReducers({
  routing: routerReducer,
  toggler
});
