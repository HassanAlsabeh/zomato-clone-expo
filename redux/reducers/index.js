import { combineReducers } from "redux";
import {
  itemReducer,
  selectedItemReducer,
  addCardReducer,
} from "./itemReducer";
import { restaurantReducer } from "./restaurantReducer";
import { updateuserInfoReducer } from "./userInfoReducer";
import { userReducer } from "./userReducer";

const reducers = combineReducers({
  data: restaurantReducer,
  item: selectedItemReducer,
  items: itemReducer,
  userdata: userReducer,
  registerusers: userReducer,
  updateuserinfo: updateuserInfoReducer,
  addCard: addCardReducer,
});

export default reducers;
