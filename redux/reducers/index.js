import { combineReducers } from "redux";
import { itemReducer, selectedItemReducer } from "./itemReducer";
import { restaurantReducer } from "./restaurantReducer";

const reducers = combineReducers({
  data: restaurantReducer,
  item: selectedItemReducer,
  items: itemReducer
});

export default reducers;
