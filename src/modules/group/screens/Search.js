import React, {Component} from "react";
import {Subscribe} from "unstated";
import {Combobox, FormField} from "evergreen-ui";
import connect from "unstated-connect";

import UniversityContainer from "../../universities/container";
import GroupContainer from "../container";

class Search extends Component {
  state = {
    university: "",
    assignment: "",
  };

  handleUniversityChange = university => {
    this.setState(prevState => ({
      university,
      assignment:
        university !== prevState.university ? "" : prevState.assignment,
    }));
  };

  handleAssignmentChange = assignment => {
    const {university} = this.state;
    const {
      containers: [, groupContainer],
    } = this.props;

    this.setState({
      assignment,
    });
    groupContainer.search(university, assignment);
  };

  render() {
    const {
      containers: [universityContainer, groupContainer],
    } = this.props;
    const {university, assignment} = this.state;

    const universities = universityContainer.state.list;
    const assignments = university
      ? universities.find(u => u.id === university).classes
      : [];

    return (
      <Subscribe to={[GroupContainer]}>
        {group => (
          <div>
            <div>
              <FormField label="Universidad">
                <Combobox
                  items={universities.map(u => u.id)}
                  placeholder="Universidad"
                  selectedItem={university}
                  onChange={this.handleUniversityChange}
                />
              </FormField>
              <FormField label="Materia">
                <Combobox
                  items={assignments}
                  placeholder="Materia"
                  selectedItem={assignment}
                  onChange={this.handleAssignmentChange}
                />
              </FormField>
            </div>
            <div>{JSON.stringify(groupContainer.state.list)}</div>
          </div>
        )}
      </Subscribe>
    );
  }
}

export default connect([UniversityContainer, GroupContainer])(Search);
