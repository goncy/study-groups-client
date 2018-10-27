import {Container} from "unstated";

import api from "./resources";

export default class UserContainer extends Container {
  state = {
    profile: {},
  };

  async login({email, password}) {
    const profile = await api.login({email, password});

    this.setState({profile});
    this.persist(profile);
  }

  async restore() {
    const session = localStorage.getItem("session");

    if (session) {
      const user = JSON.stringify(session);
      this.login(user);
    }
  }

  persist = user => {
    localStorage.setItem("session", JSON.stringify(user));
  };

  async update(data) {
    const profile = await api.update(data);

    this.setState({profile});
  }
}
