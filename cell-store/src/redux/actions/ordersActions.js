import axios from "axios";

export const GET_ALL_ORDERS = "GET_ALL_ORDERS";
export const GET_USER_ORDERS = "GET_USER_ORDERS";

axios.defaults.baseURL = import.meta.env.VITE_API || "http://localhost:3001";

export const getAllOrders = () => {
  return async (dispatch) => {
    try {
      const orders = await axios.get("/orders");

      return dispatch({
        type: GET_ALL_ORDERS,
        payload: orders.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export function getOrdersByUser(userId) {
  return async function (dispatch) {
    try {
      let orders = await axios.get(`/${userId}/orders`);

      return dispatch({
        type: GET_USER_ORDERS,
        payload: orders.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
