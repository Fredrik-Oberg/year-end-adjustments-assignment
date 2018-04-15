import React from "react";
import BalanceSumRow from "./BalanceSumRow";

const BalanceSummary = props => {
  let rows = [];

  props.balanceSummary.forEach((item, index) => {
    rows.push(
      <BalanceSumRow
        key={"row-data-" + index}
        text={item.text}
        value={item.value}
        type={item.type}
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
export default BalanceSummary;
