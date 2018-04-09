import React from "react";
import { NumberFormatter as formatter } from "../../../helpers/numberFormatter";

const BalanceList = props => {
  const addDeprInvenAmountChange = ev => {
    //TODO Add validation
    ev.preventDefault();
    props.addDeprInvenAmountChangeHandler(ev.target.value);
  };

  return (
    <div className="balance-list">
      <table className="table">
        <thead>
          <tr className="table-light">
            <th scope="col" />
            <th scope="col">Max. minskning av resultat</th>
            <th scope="col">Max. ökning av resultat</th>
            <th scope="col">Valt Belopp</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Överavskrivning på inventarier</th>
            <td> {formatter(props.addDeprInven)} </td>
            <td className="bg-secondary" />
            <td className="bg-info">
              <input
                type="number"
                className="form-control"
                value={props.addDeprInvenAmount}
                onChange={addDeprInvenAmountChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default BalanceList;
