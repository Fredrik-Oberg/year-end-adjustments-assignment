import React, { Component } from "react";
import Customer from "../components/Customer/";
import Backoffice from "../components/Backoffice/";
import { connect } from "react-redux";
import { APP_LOAD, REDIRECT } from "../constants/actionTypes";
import { Route, Switch } from "react-router-dom";
import { store } from "../store";
import { push } from "react-router-redux";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () => dispatch({ type: REDIRECT })
});

class App extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      store.dispatch(push(nextProps.redirectTo));
      this.props.onRedirect();
    }
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/backoffice" component={Backoffice} />
          <Route component={Customer} />
        </Switch>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
