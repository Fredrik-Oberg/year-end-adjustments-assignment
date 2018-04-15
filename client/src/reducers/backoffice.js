import {
  SAVING_BACKOFFICE_DATA,
  SAVED_BACKOFFICE_DATA
} from "../constants/actionTypes";

const defaultState = {
  headerText: "Indata",
  isLoading: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SAVING_BACKOFFICE_DATA:
      return {
        ...state,
        isLoading: true
      };
    case SAVED_BACKOFFICE_DATA:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
