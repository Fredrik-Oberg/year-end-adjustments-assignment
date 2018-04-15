import { Client, Backoffice } from "../api";
import {
  LOAD_CUSTOMER_DATA_SUCCESS,
  SAVING_BACKOFFICE_DATA,
  SAVED_BACKOFFICE_DATA
} from "../constants/actionTypes";

const id = 1;

export function loadCustomerData() {
  return function(dispatch, getState) {
    return Client.get(id)
      .then(res => {
        dispatch(loadCustomerDataSuccess(res));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function saveBackofficeData() {
  return function(dispatch, getState) {
    dispatch(savingBackofficeData());
    var valuesToSave = getState().balance.balanceList;
    return Backoffice.post(id, valuesToSave)
      .then(res => {})
      .catch(error => {
        throw error;
      })
      .finally(() => {
        setTimeout(function() {
          dispatch(savedBackofficeData());
        }, 3000);
      });
  };
}

export function loadCustomerDataSuccess(clientData) {
  return { type: LOAD_CUSTOMER_DATA_SUCCESS, clientData };
}
export function savingBackofficeData() {
  return { type: SAVING_BACKOFFICE_DATA };
}
export function savedBackofficeData() {
  return { type: SAVED_BACKOFFICE_DATA };
}
