import { combineReducers } from "redux";
import { restaurantReducer } from "./restaurantReducer";
import { updateuserInfoReducer } from "./userInfoReducer";
import { userReducer } from "./userReducer";

const reducers = combineReducers({
  data: restaurantReducer,
  userdata: userReducer,
  registerusers: userReducer,
  updateuserinfo: updateuserInfoReducer,
});

export default reducers;
