import React from "react";
import { connect } from "react-redux";
import { CUSTOMER_PAGE_LOADED } from "../../constants/actionTypes";
import Header from "../Shared/Header";
import InfoSection from "./InfoSection";
import AppropriationsSection from "./Appropriations/";
import AnnualReturnSection from "./AnnualReturnSection";

const mapStateToProps = state => {
  const { headerText } = state.customer;
  const { annualAccountResult } = state.appropriations;

  return {
    headerText,
    annualAccountResult
  };
};

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch({ type: CUSTOMER_PAGE_LOADED })
});

class Customer extends React.Component {
  render() {
    return (
      <div>
        <Header headerText={this.props.headerText} />
        <div className="customer-page">
          <div className="container page">
            <div className="row">
              <div className="col-md-12">
                <InfoSection
                  annualAccountResult={this.props.annualAccountResult}
                />
                <hr />
                <AppropriationsSection />
                <hr />
                <AnnualReturnSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customer);
