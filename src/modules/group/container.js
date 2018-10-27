import {Container} from "unstated";

import api from "./resources";

export default class GroupContainer extends Container {
  state = {
    list: [],
    selected: null,
  };

  search = async criteria => {
    const list = await api.search(criteria);

    this.setState({list});
  };

  async fetch (id) {
    const selected = await api.fetch(id);

    this.setState({selected});
  };

  create = async data => {
    const group = await api.create(data);

    this.setState(({list}) => ({list: list.concat(group), selected: group}));
  };

  update = async data => {
    const profile = await api.update(data);

    this.setState({profile});
  };
}
