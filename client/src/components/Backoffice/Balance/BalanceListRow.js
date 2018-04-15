import React from "react";
import helper from "../../../helpers/balanceHelpers";

const BalanceListRow = props => {
  const key = "row-data-" + props.ktoNr + "-" + props.index;

  return (
    <tr key={key}>
      <th scope="row">{props.ktoNr} </th>
      <td> {props.ktoName}</td>
      <td> {props.openingFiscal}</td>
      <td> {props.openingPeriod}</td>
      <td> {props.closingBalance}</td>
      <td>
        {helper.calulateNonDeductible(props.ktoNr, props.closingBalance)}{" "}
      </td>
      <td>
        {helper.calculateTaxFreeEarnings(props.ktoNr, props.closingBalance)}
      </td>
    </tr>
  );
};

export default BalanceListRow;
