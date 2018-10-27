import React from "react";
import {Pane, Heading} from "evergreen-ui";

const GroupCard = ({group}) => (
  <Pane elevation={1}>
    <Heading backgroundColor="white" size={700} width="100%">
      {group.title}
    </Heading>
    {group.description}
    {group.datetime}
    {group.professor}
  </Pane>
);

export default GroupCard;
