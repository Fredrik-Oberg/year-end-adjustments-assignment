import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  ...state.annualReturnSection
});

const mapDispatchToProps = dispatch => ({});

class AnnualReturnSection extends React.Component {
  render() {
    return (
      <div className="annual-return-section">
        <p>TODO annual-return-section</p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  AnnualReturnSection
);
