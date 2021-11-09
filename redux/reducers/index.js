import { combineReducers } from "redux";
import { itemReducer, selectedItemReducer } from "./itemReducer";
import { restaurantReducer } from "./restaurantReducer";
import {userReducer} from "./userReducer";

const reducers = combineReducers({
  data: restaurantReducer,
  item: selectedItemReducer,
  items: itemReducer,
  userdata: userReducer,
  registerusers: userReducer,
});

export default reducers;
