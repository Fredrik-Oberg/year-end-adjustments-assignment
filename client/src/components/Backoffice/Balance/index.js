import React from "react";
import { connect } from "react-redux";
import BalanceSummary from "./BalanceSummary";
import BalanceList from "./BalanceList";

const mapStateToProps = state => ({
  ...state.balance,
  headerText: "Bokslutsdispositioner, skatt och utdelning"
});

const mapDispatchToProps = dispatch => ({});

class BalanceSection extends React.Component {
  render() {
    return (
      <div>
        <div className="balance-section">
          <div className="row">
            <div className="col-md-12" />
            <div className="row">
              <div className="col-md-9">
                <div className="row">
                  <BalanceSummary balanceSummary={this.props.balanceSummary} />
                </div>
                <div className="row">
                  <BalanceList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BalanceSection);
