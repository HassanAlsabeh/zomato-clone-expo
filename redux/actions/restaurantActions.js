import urlAxios from '../../apis/axiosApi';
import { ActionTypes } from '../contants/action-types';

export const fetchRestaurants = () => {
  return async function (dispatch) {
    try {

      const response = await urlAxios.get('/restaurant/details');
      const data = response.data.data;
      dispatch({ type: ActionTypes.FETCH_RESTAURANT, payload: data })
    } catch (err) {
      if (err.response) {
        console.log(err.response.message);
      }
    }
  }
}