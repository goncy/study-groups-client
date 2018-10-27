// @flow
import type {ContainerType} from "unstated";
import styled from "styled-components";
import React, {Component} from "react";
import connect from "unstated-connect";
import {TextInput, Button} from "evergreen-ui";
import UserContainer from "../container";

type Props = {
  containers: Array<ContainerType>,
};
const Container = styled.div`
  font-family: "Open Sans", sans-serif;
  background: #d1196e;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Section = styled.div`
  background: #192a3a;
  width: 70%;
  height: 50%;
  display: flex;
  -webkit-box-shadow: 0px -1px 44px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px -1px 44px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px -1px 44px -2px rgba(0, 0, 0, 0.75);
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 91%;
  margin: 2em;
`;
const Presentation = styled.div`
  font-family: "Open Sans", sans-serif;
  background: #34cea7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  h4 {
    margin: 0;
    font-size: 1.6em;
    color: #192a3a;
  }
  p {
    text-align: center;
    color: #192a3a;
    max-width: 80%;
    font-size: 20px;
  }
`;
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
      <Container>
        <Section>
          <Presentation>
            <h4>Study Meeting</h4>
            <p>Buscá grupos de estudio que estén estudiando lo mismo que vos</p>
          </Presentation>
          <Form onSubmit={this.login}>
            <TextInput
              margin="1em"
              placeholder="Email"
              type="email"
              value={email}
              onChange={e => this.setState({email: e.target.value})}
            />
            <TextInput
              margin="1em"
              placeholder="Password"
              type="password"
              value={password}
              onChange={e => this.setState({password: e.target.value})}
            />
            <Button
              appearance="primary"
              intent="success"
              margin="1em"
              type="submit"
            >
              Logueate
            </Button>
          </Form>
        </Section>

        {/* JSON.stringify(user.state) */}
      </Container>
    );
  }
}

export default connect([UserContainer])(LoginScreen);
