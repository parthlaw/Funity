import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import reducer from "./Components/Dependencies/Redux/reducers";
import rootSaga from "./Components/Dependencies/Redux/sagas";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import * as serviceWorker from "./serviceWorker";
import LocaleContextProvider from "./Components/Dependencies/Messages/LocaleContext";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <LocaleContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </LocaleContextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
