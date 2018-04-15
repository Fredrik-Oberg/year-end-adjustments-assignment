const nonDeductiables = [
  "6072",
  "6342",
  "6982",
  "6992",
  "6994",
  "7622",
  "7623",
  "7632",
  "7699",
  "8423",
  "8070",
  "8072",
  "8077",
  "8170",
  "8270",
  "8370"
];
const taxFreeEarnings = [
  "8314",
  "8010",
  "8110",
  "8210",
  "8082",
  "8086",
  "8180",
  "8182",
  "8280",
  "8380"
];

export default {
  calulateNonDeductible(ktoNr, closingBalance) {
    if (nonDeductiables.indexOf(ktoNr) >= 0) {
      return closingBalance;
    }
    return 0;
  },
  calculateTaxFreeEarnings(ktoNr, closingBalance) {
    if (taxFreeEarnings.indexOf(ktoNr) >= 0) {
      return -closingBalance;
    }
    return 0;
  }
};
