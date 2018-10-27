import {Container} from "unstated";

import api from "./resources";

export default class UserContainer extends Container {
  state = {
    profile: {},
  };

  async login({email, password}) {
    const profile = await api.login({email, password});

    this.setState({profile});
  }

  async update(data) {
    const profile = await api.update(data);

    this.setState({profile});
  }
}
