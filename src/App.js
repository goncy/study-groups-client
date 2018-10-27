import React, {Component} from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import connect from "unstated-connect";

import Search from "./modules/group/screens/Search";
import List from "./modules/group/screens/List";
import Create from "./modules/group/screens/Create";
import Details from "./modules/group/screens/Details";

import Login from "./modules/user/screens/Login";
import Profile from "./modules/user/screens/Profile";

import UniversityContainer from "./modules/universities/container";
import UserContainer from "./modules/user/container";

class App extends Component {
  async componentDidMount() {
    const {
      containers: [university, user],
    } = this.props;

    await university.fetch();
    await user.restore();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact component={Login} path="/login" />
          <Route exact component={Search} path="/groups" />
          <Route exact component={List} path="/my-groups" />
          <Route exact component={Create} path="/groups/create" />
          <Route exact component={Details} path="/groups/:id" />
          <Route exact component={Profile} path="/profile" />
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect([UniversityContainer, UserContainer])(App);
