import productReducer from "./reducer/productReducer";

import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./reducer/userReducer";
import cartReducer from "./reducer/cartReducers";
const reducer = combineReducers({
  product : productReducer,
  user : userReducer,
  cart: cartReducer,
})
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
// thunk nos permite trabajar con asincronismo en el front

export default store;