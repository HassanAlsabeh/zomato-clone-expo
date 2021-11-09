import urlAxios from "../../apis/axiosApi";
import { ActionTypes } from "../contants/action-types";

export const updateUserInfo = () => {
  return async function (dispatch) {
    try {
      const response = await urlAxios.get(`/update_userinfo/${id}`);
      const updateuserinfodata = response.data;
      dispatch({ type: ActionTypes.UPDATE_USERINFO, payload: updateuserinfodata });
    } catch (err) {
      if (err.response) {
        console.log(err.response.message);
      }
    }
  };
};
