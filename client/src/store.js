import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import reducer from "./reducer";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";

export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware();

const getMiddleware = () => {
  if (process.env.NODE_ENV === "production") {
    return applyMiddleware(myRouterMiddleware, thunk);
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(myRouterMiddleware, thunk, createLogger());
  }
};

export const store = createStore(
  reducer,
  composeWithDevTools(getMiddleware(history))
);
