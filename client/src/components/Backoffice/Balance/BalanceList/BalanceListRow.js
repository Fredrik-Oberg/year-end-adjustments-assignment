import React from "react";
import helper from "../../../../helpers/balanceHelpers";

const BalanceListRow = props => {
  const rowChangeKtoNr = ev => {
    ev.preventDefault();
    rowChange(
      Object.assign(
        {},
        {
          ktoNr: ev.target.value
        }
      )
    );
  };
  const rowChangeKtoName = ev => {
    ev.preventDefault();
    rowChange(
      Object.assign(
        {},
        {
          ktoName: ev.target.value
        }
      )
    );
  };
  const rowChangeOpeningFiscal = ev => {
    ev.preventDefault();
    rowChange(
      Object.assign(
        {},
        {
          openingFiscal: ev.target.value
        }
      )
    );
  };
  const rowChangeOpeningPeriod = ev => {
    ev.preventDefault();
    rowChange(
      Object.assign({}, props, {
        openingPeriod: ev.target.value
      })
    );
  };
  const rowChangeClosingBalance = ev => {
    ev.preventDefault();
    rowChange(
      Object.assign({}, props, {
        closingBalance: ev.target.value
      })
    );
  };
  const rowChange = newProps => {
    let row = {
      ktoNr: newProps.ktoNr,
      ktoName: newProps.ktoName,
      openingFiscal: newProps.openingFiscal,
      openingPeriod: newProps.openingPeriod,
      closingBalance: newProps.closingBalance
    };
    props.rowChangeHandler(props.index, row);
  };
  return (
      <th scope="row">
        <input
          type="number"
          className="form-control"
          value={props.ktoNr}
          onChange={rowChangeKtoNr}
        />
      </th>
      <td>
        <input
          type="text"
          className="form-control"
          value={props.ktoName}
          onChange={rowChangeKtoName}
        />
      </td>
      <td>
        <input
          type="number"
          className="form-control"
          value={props.openingFiscal}
          onChange={rowChangeOpeningFiscal}
        />
      </td>
      <td>
        <input
          type="number"
          className="form-control"
          value={props.openingPeriod}
          onChange={rowChangeOpeningPeriod}
        />
      </td>
      <td>
        <input
          type="number"
          className="form-control"
          value={props.closingBalance}
          onChange={rowChangeClosingBalance}
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
