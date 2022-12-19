import { GET_ALL_ORDERS, GET_USER_ORDERS } from "../actions/ordersActions";

const initialState = {
  allOrders: [],
  userOrders: [],
};

export default function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_ORDERS:
      return {
        ...state,
        allOrders: action.payload,
      };
    case GET_USER_ORDERS:
      return {
        ...state,
        userOrders: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
