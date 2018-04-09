import customer from "./reducers/customer";
import appropriations from "./reducers/appropriations";
import backoffice from "./reducers/backoffice";
import balance from "./reducers/balance";
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

export default combineReducers({
  customer,
  backoffice,
  balance,
  appropriations,
  router: routerReducer
});
