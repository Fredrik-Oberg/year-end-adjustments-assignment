import React from "react";
import { connect } from "react-redux";
import { BALANCE_LIST_UPDATED } from "../../../../constants/actionTypes";
import BalanceListTable from "./BalanceListTable";

const mapStateToProps = state => ({
  ...state.balance
});

const mapDispatchToProps = dispatch => ({
  addDeprInvenAmountChangeHandler: list =>
    dispatch({ type: BALANCE_LIST_UPDATED, list })
});

class BalanceList extends React.Component {
  render() {
    return <BalanceListTable balanceList={this.props.balanceList} />;
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BalanceList);
