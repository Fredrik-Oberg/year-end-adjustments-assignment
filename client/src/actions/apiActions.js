import { Client } from "../api";
import { LOAD_CUSTOMER_DATA_SUCCESS } from "../constants/actionTypes";

export function loadCustomerData() {
  return function(dispatch, id) {
    return Client.get(id)
      .then(res => {
        dispatch(loadCustomerDataSuccess(res));
      })
      .catch(error => {
        throw error;
      });
  };
}
export function loadCustomerDataSuccess(clientData) {
  return { type: LOAD_CUSTOMER_DATA_SUCCESS, clientData };
}
