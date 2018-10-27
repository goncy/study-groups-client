// @flow
import type {Container} from "unstated";

import React, {Component} from "react";
import connect from "unstated-connect";

import UserContainer from "../container";

type Props = {
  containers: Array<Container>,
};

class LoginScreen extends Component {
  props: Props;

  state = {
    email: "",
    password: "",
  };

  login = async e => {
    const {
      containers: [user],
    } = this.props;
    const {email, password} = this.state;

    e.preventDefault();

    await user.login({email, password});
  };

  render() {
    const {email, password} = this.state;
    const {
      containers: [user],
    } = this.props;

    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="email"
            value={email}
            onChange={e => this.setState({email: e.target.value})}
          />
          <input
            type="password"
            value={password}
            onChange={e => this.setState({password: e.target.value})}
          />
          <button type="submit">Login</button>
        </form>
        {JSON.stringify(user.state)}
      </div>
    );
  }
}

export default connect([UserContainer])(LoginScreen);
