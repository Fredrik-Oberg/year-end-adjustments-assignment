import { BALANCE_SUMMARY_UPDATED } from "../constants/actionTypes";

function calculateBookedFixedAssets(balanceList) {
  var amount = 0;
  balanceList.forEach((item, index) => {
    var ktoNr = item.ktoNr;
    if (ktoNr >= 1000 && ktoNr <= 1299) {
      amount += parseFloat(item.closingBalance);
    }
  });
  return amount;
}

function calculatePrelRes(balanceList) {
  var amount = 0;
  balanceList.forEach((item, index) => {
    var ktoNr = item.ktoNr;
    if (ktoNr >= 3000) {
      amount -= parseFloat(item.closingBalance);
    }
  });
  return amount;
}

export function updateBalanceSummary() {
  return function(dispatch, getState) {
    const balanceList = getState().balance.balanceList;
    const balanceSummary = getState().balance.balanceSummary;
    balanceSummary.bookedFixedAssets.value = calculateBookedFixedAssets(
      balanceList
    );
    balanceSummary.prelRes.value = calculatePrelRes(balanceList);
    balanceSummaryUpdated(balanceSummary);
  };
}
export function balanceSummaryUpdated(balanceSummary) {
  return { type: BALANCE_SUMMARY_UPDATED, balanceSummary };
}
