import React from "react";
import helper from "../../../../helpers/balanceHelpers";

const BalanceListRow = props => {
  const rowChange = ev => {
    ev.preventDefault();
    //TODO fire event to trigger change for row.

    // props.rowChange(ev.target.value);
  };
  return (
    <tr>
      <th scope="row">
        <input
          type="number"
          className="form-control"
          value={props.ktoNr}
          onChange={rowChange}
        />
      </th>
      <td>
        <input
          type="number"
          className="form-control"
          value={props.ktoName}
          onChange={rowChange}
        />
      </td>
      <td>
        <input
          type="number"
          className="form-control"
          value={props.openingFiscal}
          onChange={rowChange}
        />
      </td>
      <td>
        <input
          type="number"
          className="form-control"
          value={props.openingPeriod}
          onChange={rowChange}
        />
      </td>
      <td>
        <input
          type="number"
          className="form-control"
          value={props.closingBalance}
          onChange={rowChange}
        />
      </td>
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
