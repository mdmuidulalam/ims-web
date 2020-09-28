import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.less";
import Account from "./components/backboneComponents/account/account.jsx";
import Example from "./components/backboneComponents/example/example.jsx";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div id="app">
        <Router>
          <Switch>
            <Route path={`/account`}>
              <Account />
            </Route>
            <Route path={`/example`}>
              <Example />
            </Route>
            <Route path={`/`}>
              <Example />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
