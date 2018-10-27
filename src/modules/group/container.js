import {Container} from "unstated";

import api from "./resources";

export default class GroupContainer extends Container {
  state = {
    list: [],
    selected: null,
  };

  search = async (university, assignment) => {
    const list = await api.search(university, assignment);
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
