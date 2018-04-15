import { BALANCE_LIST_UPDATED } from "../constants/actionTypes";

const defaultState = {
  balanceSummary: [
    //TODO Add calculated values for all
    {
      text: "Bokfört värde på anläggningstillgångar",
      value: 0,
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
  balanceList: [
    {
      ktoNr: "1220",
      ktoName: "Inventarier och verktyg",
      openingFiscal: 0,
      openingPeriod: 0,
      closingBalance: 56867.2
    },
    {
      ktoNr: "6072",
      ktoName: "Representation, ej avdragsgill",
      openingFiscal: 0,
      openingPeriod: 0,
      closingBalance: 5206.4
    },
    {
      ktoNr: "8314",
      ktoName: "Något avdragsgillt",
      openingFiscal: 0,
      openingPeriod: 0,
      closingBalance: 5000
    }
  ]
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case BALANCE_LIST_UPDATED:
      state.balanceList[action.rowToReplace.index] = action.rowToReplace.row;
      return {
        ...state,
        balanceList: state.balanceList.map(
          (row, i) =>
            i === action.rowToReplace.index ? action.rowToReplace.row : row
        )
      };
    default:
      return state;
  }
};
