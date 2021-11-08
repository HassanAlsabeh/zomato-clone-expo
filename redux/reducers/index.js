import { combineReducers } from "redux";
import { restaurantReducer } from "./restaurantReducer";
import { userReducer } from "./userReducer";

const reducers = combineReducers({
  data: restaurantReducer,
  userdata: userReducer,
  registerusers: userReducer,
});

export default reducers;
