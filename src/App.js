import React, {Component} from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import styled from "styled-components";
import connect from "unstated-connect";
import UniversityContainer from "./modules/universities/container";

import Search from "./modules/group/screens/Search";
import List from "./modules/group/screens/List";
import Create from "./modules/group/screens/Create";
import Details from "./modules/group/screens/Details";

import Login from "./modules/user/screens/Login";
import Profile from "./modules/user/screens/Profile";

class App extends Component {
  async componentDidMount() {
    const {
      containers: [university],
    } = this.props;

    await university.fetch();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={Login} path="/login" />
          <Route component={Search} path="/groups" />
          <Route component={List} path="/my-groups" />
          <Route component={Create} path="/groups/create" />
          <Route component={Details} path="/groups/:id" />
          <Route component={Profile} path="/profile" />
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect([UniversityContainer])(App);
