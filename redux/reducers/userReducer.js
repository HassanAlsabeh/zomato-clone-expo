import { ActionTypes } from "../contants/action-types";

const initialState = {
  users: [],
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGINUSERS:
      return {
        users: payload,
      };
    default:
      return state;
  }       
};
