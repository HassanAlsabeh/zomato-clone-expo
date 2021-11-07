import { ActionTypes } from "../contants/action-types";

const initialState = {
  //   items: [],
  //item: {},
};

export const selectedItemReducer = (
  state = {},
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.FETCH_ITEM:
      return { ...state, ...payload };
    //   case ActionTypes.REMOVE_SELECTED_PRODUCT:
    //     return {};
    default:
      return state;
  }
};

export const itemReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_ITEMS:
      return { ...state, items: payload };
    //   case ActionTypes.FETCH_PRODUCTS:
    //   return { ...state, products: payload };
    default:
      return state;
  }
};
