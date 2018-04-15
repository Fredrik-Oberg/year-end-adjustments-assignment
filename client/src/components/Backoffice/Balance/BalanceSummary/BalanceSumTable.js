import React from "react";
import BalanceSumRow from "./BalanceSumRow";

const BalanceSummaryTable = props => {
  let rows = [];
  Object.entries(props.balanceSummary).forEach(function(item, index) {
    const value = item[1];
    rows.push(
      <BalanceSumRow
        key={"row-data-" + index}
        text={value.text}
        value={value.value}
        type={value.type}
        index={index}
      />
    );
  });

  return (
    <div className="balance-summary">
      <table className="table">
        <thead>
          <tr className="table-light">
            <th scope="col">Summering av saldolista </th>
            <th scope="col">Saldo</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};
export default BalanceSummaryTable;
