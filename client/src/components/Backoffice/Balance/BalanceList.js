import React from "react";
import BalanceListRow from "./BalanceListRow";

const BalanceList = props => {
  let rows = [];

  props.balanceList.forEach((item, index) => {
    const key = "row-data-" + item.ktoNr + "-" + item.index;
    rows.push(
      <BalanceListRow
        key={key}
        index={index}
        ktoNr={item.ktoNr}
        ktoName={item.ktoName}
        openingFiscal={item.openingFiscal}
        openingPeriod={item.openingPeriod}
        closingBalance={item.closingBalance}
      />
    );
  });
  return (
    <div className="balance-list">
      <table className="table">
        <thead>
          <tr className="table-dark">
            <th scope="col">KtoNr </th>
            <th scope="col">KtoNamn</th>
            <th scope="col">Opening fiscal</th>
            <th scope="col">opening period</th>
            <th scope="col">Closing Balance</th>
            <th scope="col">Ej Avdragsgill</th>
            <th scope="col">Skattefri intäkt</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};
export default BalanceList;
