import React from "react";
import {Heading} from "evergreen-ui";
import styled from "styled-components";
import {Link} from "react-router-dom";

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
const GroupCard = ({group}) => {
  console.log(group);
  return (
    <Link to={`/groups/${group.id}`}>
      <Card elevation={1}>
        <header>
          <div className="nameandlimit">
            <span>{group.title}</span>
            <span>
              Participantes: {group.participants.length}/{group.limit}
            </span>
          </div>
        </header>
        <section>
          <p>
            <span className="title">Descripción: </span>
            {group.description}
          </p>
          <p>
            <span className="title">Fecha: </span>
            {group.datetime}
          </p>
          <p>
            <span className="title">Profesor:</span> {group.professor}
          </p>
          <p>
            <span className="title">Clase:</span> {group.class}
          </p>
          <p>
            <span className="title">Ubicación:</span> {group.location}
          </p>
        </section>
      </Card>
    </Link>
  );
};

export default GroupCard;
