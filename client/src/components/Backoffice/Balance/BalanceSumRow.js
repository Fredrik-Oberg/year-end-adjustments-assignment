import React from "react";
import { NumberFormatter as formatter } from "../../../helpers/numberFormatter";

const BalanceSumRow = props => {
  const value = props.type === "number" ? formatter(props.value) : props.value;
  return (
    <tr key={"row-data-" + props.index}>
      <th scope="row">{props.text} </th>
      <td> {value}</td>
    </tr>
  );
};
export default BalanceSumRow;
