import { combineReducers } from 'redux';
import { restaurantReducer } from './restaurantReducer';

const reducers = combineReducers({
  data: restaurantReducer
})

export default reducers;