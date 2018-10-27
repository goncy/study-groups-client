import React, {Component} from "react";
import styled from "styled-components";
// import {Subscribe} from "unstated";
import {Combobox, FormField, Pane} from "evergreen-ui";
import connect from "unstated-connect";
import GroupCard from "./GroupCard";

import UniversityContainer from "../../universities/container";
import GroupContainer from "../container";

const Container = styled.div`
  width: 960px;
  margin: 0 auto;
`;

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
      ? universities.find(u => u.id === university).assignments
      : [];

    return (
      <Pane width="100%">
        <Pane background="tint2" borderBottom="muted" paddingY="30px">
          <Container>
            <Pane display="flex" justifyContent="center">
              <Combobox
                height={40}
                items={universities.map(u => u.id)}
                placeholder="Universidad"
                selectedItem={university}
                onChange={this.handleUniversityChange}
              />
              <Pane width="20px" />
              <Combobox
                height={40}
                items={assignments}
                placeholder="Materia"
                selectedItem={assignment}
                onChange={this.handleAssignmentChange}
              />
            </Pane>
          </Container>
        </Pane>
        <Pane>
          <Container>
            <Pane paddingY="30px">
              {groupContainer.state.list.map(currentGroup => (
                <GroupCard group={currentGroup} />
              ))}
            </Pane>
          </Container>
        </Pane>
      </Pane>
    );
  }
}

export default connect([UniversityContainer, GroupContainer])(Search);
