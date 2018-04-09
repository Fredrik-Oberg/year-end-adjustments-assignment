import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import { store, history } from "./store";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import App from "./components/App";

ReactDOM.render(
  //TODO check if this router is doing anything
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>,

  document.getElementById("root")
);
