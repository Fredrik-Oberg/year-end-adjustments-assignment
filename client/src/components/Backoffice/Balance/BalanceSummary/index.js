import React from "react";
import { connect } from "react-redux";
import { store } from "../../../../store";
import { updateBalanceSummary } from "../../../../actions/balanceSummaryActions";
import BalanceSumTable from "./BalanceSumTable";

const mapStateToProps = state => ({
  ...state.balance
});

const mapDispatchToProps = dispatch => ({});

store.dispatch(updateBalanceSummary());

class BalanceSummary extends React.Component {
  componentWillReceiveProps(nextProps) {
    store.dispatch(updateBalanceSummary());
  }
  render() {
    return <BalanceSumTable balanceSummary={this.props.balanceSummary} />;
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BalanceSummary);
