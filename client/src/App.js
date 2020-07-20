import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./redux/configureStore";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Journal from "./components/Journal";
import Data from "./components/Data";
import TemplateContainer from "./components/Templates";
import PageNotFound from "./PageNotFound/PageNotFound";

const { store, persistor } = configureStore();

const TheraputicWriting = {
  store,
  persistor,
};

window.TheraputicWriting = TheraputicWriting;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <div className="App">
              <Navbar />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/profile" component={Profile} />
                  <Route exact path="/journal" component={Journal} />
                  <Route exact path="/data" component={Data} />
                  <Route
                    exact
                    path="/templates"
                    component={TemplateContainer}
                  />
                  <Route path="*" component={PageNotFound} />
                </Switch>
              </div>
            </div>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
