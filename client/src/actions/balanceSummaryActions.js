import { BALANCE_LIST_UPDATED } from "../constants/actionTypes";

export function bookedFixedAssets() {
  return (dispatch, getState) => {
    
    return balanceList.map(value => {
      var ktoNr = value.ktoNr;
      if (ktoNr >= 1000 && ktoNr <= 1299) {
        return value.closingBalance;
      }
      return null;
    });
  };
export function updateBalanceSummary() {
  return (dispatch, getState) => {
    const {items} = getState().balance.balanceList;
  }
}
export function balanceListUpdated(clientData) {
  return { type: BALANCE_LIST_UPDATED, clientData };
}

/*
balanceSummary: [
    //TODO Add calculated values for all
    {
      text: "Bokfört värde på anläggningstillgångar",
      value: 44385,
      type: "number"
    },
    {
      text: "Varulagersaldo",
      value: 0,
      type: "number"
    },
    {
      text: "Aktiekapital",
      value: 50000,
      type: "number"
    },
    {
      text: "Preliminärt resultat före dispositioner och skatt",
      value: 0,
      type: "number"
    },
    {
      text: "Pfond ingående balans",
      value: 1,
      type: "number"
    },
    {
      text: "Schablonränta på P-fonder för året",
      value: "0.36%",
      type: "text"
    }
  ],

  */
