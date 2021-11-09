import { ActionTypes } from '../contants/action-types'

const initialState = {
  updateuserinfo: []
}

export const updateuserInfoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.UPDATE_USERINFO:
      return {
        updateuserinfo: payload
      };
    default:
      return state;
  }
}