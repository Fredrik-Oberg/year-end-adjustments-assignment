import React from "react";
import { connect } from "react-redux";
import Header from "../Shared/Header";
import InfoSection from "./InfoSection";
import Balance from "./Balance";
import Footer from "./Footer";

const mapStateToProps = state => ({
  ...state.backoffice,
  headerText: "Bokslutsdispositioner, skatt och utdelning"
});

const mapDispatchToProps = dispatch => ({});

class Backoffice extends React.Component {
  render() {
    return (
      <div>
        <div className="backoffice-page">
          <Header headerText={this.props.headerText} />

          <div className="container page">
            <div className="row">
              <div className="col-md-12" />
              <InfoSection />
              <hr />
              <h2>TODO settings section </h2>
              <hr />

              <Balance />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Backoffice);
