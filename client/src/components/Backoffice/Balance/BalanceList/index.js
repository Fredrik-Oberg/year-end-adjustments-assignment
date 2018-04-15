import React from "react";
import { connect } from "react-redux";
import { BALANCE_LIST_UPDATED } from "../../../../constants/actionTypes";
import BalanceListTable from "./BalanceListTable";

const mapStateToProps = state => ({
  ...state.balance
});

const mapDispatchToProps = dispatch => ({
  rowChangeHandler: (index, row) => {
    dispatch({
      type: BALANCE_LIST_UPDATED,
      rowToReplace: { index, row }
    });
  }
});

class BalanceList extends React.Component {
  render() {
    return (
      <BalanceListTable
        balanceList={this.props.balanceList}
        rowChangeHandler={this.props.rowChangeHandler}
      />
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BalanceList);
