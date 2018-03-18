import React from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import type { Match } from "react-router-dom";
import store from "./store";

import Landing from "./Landing.jsx";
import Test from "./Test";

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Route exact path="/" component={props => <Landing />} />
      <Route path="/test" component={props => <Test />} />
    </div>
  </Provider>
);

export default App;
