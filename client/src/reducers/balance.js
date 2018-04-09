const defaultState = {
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
  ]
};

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
