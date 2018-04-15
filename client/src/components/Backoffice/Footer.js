import React from "react";
import { connect } from "react-redux";

import { saveBackofficeData } from "../../actions/apiActions";
import { store } from "../../store";

const mapStateToProps = state => ({
  ...state.backoffice
});

const mapDispatchToProps = dispatch => ({});

const saveBackofficeDataHandler = ev => {
  ev.preventDefault();
  store.dispatch(saveBackofficeData());
};
class Footer extends React.Component {
  render() {
    return (
      <div>
        {this.props.isLoading === true && (
          <span>Vänligen vänta medans datan sparas</span>
        )}
        <div className="pull-right">
          <button
            className="btn btn-info btn-big"
            onClick={saveBackofficeDataHandler}
            disabled={this.props.isLoading === true}
          >
            Spara
          </button>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
