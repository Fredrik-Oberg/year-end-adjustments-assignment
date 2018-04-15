import React from "react";
import { connect } from "react-redux";
import { BALANCE_LIST_UPDATED } from "../../../../constants/actionTypes";
import BalanceSumTable from "./BalanceSumTable";

const mapStateToProps = state => ({
  ...state.balance
});

const mapDispatchToProps = dispatch => ({
  addDeprInvenAmountChangeHandler: list =>
    dispatch({ type: BALANCE_LIST_UPDATED, list })
});

class BalanceSummary extends React.Component {
  render() {
    return <BalanceSumTable balanceSummary={this.props.balanceSummary} />;
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BalanceSummary);
