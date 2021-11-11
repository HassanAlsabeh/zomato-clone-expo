import urlAxios from "../../apis/axiosApi";
import { ActionTypes } from "../contants/action-types";
export const getitems = () => async (dispatch) => {
  const response = await urlAxios.get(`restaurant/details/1`);
  //   console.log(response.data);
  dispatch({ type: ActionTypes.GET_ITEMS, payload: response.data.data });
};
