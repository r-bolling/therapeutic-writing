import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Journal, Profile, NotFoundScreen } from "../../screens";
import { ConnectedRoute } from "../connected-route/ConnectedRoute";
import Data from "../../screens/Data";
import Q_A from "../journal-templates/Q-A";
import Open from "../../components/journal-templates/Open";
import Photo from "../journal-templates/Photo";
import TemplateContainer from "../Templates";

export const Navigation = () => (
  <BrowserRouter>
    <Switch>
      {/* <ConnectedRoute
        exact
        path="/"
        // redirectIfAuthenticated
        component={JournalScreen}
      /> */}
      <ConnectedRoute
        exact
        // isProtected
        path="/profiles/:username"
        component={Profile}
      />
      <ConnectedRoute
        exact
        path="/journal"
        // redirectIfAuthenticated
        component={Journal}
      />
      <ConnectedRoute
        exact
        path="/templates"
        // redirectIfAuthenticated
        component={TemplateContainer}
      />
      {/* tmplate container starts on open */}
      <ConnectedRoute
        exact
        path="/qa"
        // redirectIfAuthenticated
        component={Q_A}
      />
      <ConnectedRoute
        exact
        path="/photo"
        // redirectIfAuthenticated
        component={Photo}
      />

      <ConnectedRoute
        exact
        path="/data"
        // redirectIfAuthenticated
        component={Data}
      />
      <ConnectedRoute path="*" component={NotFoundScreen} />
    </Switch>
  </BrowserRouter>
);
