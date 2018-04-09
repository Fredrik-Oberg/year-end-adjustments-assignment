import {
  LOAD_CUSTOMER_DATA_SUCCESS,
  ADD_DEPR_INVEN_AMOUNT_CHANGE
} from "../constants/actionTypes";

const defaultState = {
  annualAccountResult: 0,
  addDeprInven: 0,
  invetShrinkLumpSum: 0,
  returnTaxAllocRes: 0,
  addDeprInvenAmount: 0
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_CUSTOMER_DATA_SUCCESS:
      return action.clientData;
    case ADD_DEPR_INVEN_AMOUNT_CHANGE:
      return {
        ...state,
        addDeprInvenAmount: action.amount
      };
    default:
      return state;
  }
};
