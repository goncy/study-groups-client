import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Pane, Heading, Avatar, Pill, Paragraph, Text} from "evergreen-ui";

const Card = styled.div`
  min-width: 800px;
  min-height: 100px;
  margin-bottom: 2em;
  padding: 1em;
  background: #f7f7f7;
  border: 1px solid #dcdcdc;
  font-family: "Open Sans", sans-serif;
  -webkit-box-shadow: 2px 3px 28px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 3px 28px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 3px 28px -6px rgba(0, 0, 0, 0.75);
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: 5px 8px 20px 0px rgba(0, 0, 0, 0.42);
  }
  header {
    border-bottom: 1px solid #b5b5b5;
    display: flex;
    justify-content: space-between;
    .nameandlimit {
      width: 99%;
      font-size: 16px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      font-weight: bold;
    }
  }
  section {
    display: flex;
    justify-content: space-between;
    .title {
      color: #2b2020;
      font-size: 14px;
    }
    p {
      display: flex;
      flex-direction: column;
    }
  }
`;

const GroupCard = ({group}) => (
  <Link to={`/groups/${group.id}`}>
    <Card elevation={1}>
      <Pane
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        marginBottom="8px"
      >
        <Heading size="800">{group.title}</Heading>
        <Pane alignItems="center" display="flex">
          <Pill display="inline-flex" marginRight={16}>
            {group.participants.length}/{group.limit}
          </Pill>
          {group.participants.map((_, i) => (
            <Avatar
              size={40}
              src={`https://randomuser.me/api/portraits/women/${i + 1}.jpg`}
            />
          ))}
        </Pane>
      </Pane>
      <section>
        <Paragraph size="400">{group.description}</Paragraph>
      </section>
      <Pane alignItems="center" display="flex" justifyContent="space-between">
        <Text size="400">{group.datetime}</Text>
        <Text size="400">{group.location}</Text>
      </Pane>
    </Card>
  </Link>
);

export default GroupCard;
