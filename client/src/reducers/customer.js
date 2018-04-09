import { CUSTOMER_PAGE_LOADED } from "../constants/actionTypes";

const defaultState = {
  headerText: "Bokslutsdispositioner, skatt och utdelning"
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CUSTOMER_PAGE_LOADED:
      return {
        ...state
      };
    default:
      return state;
  }
};
