import React from "react";
import {Pane, Heading, Avatar, Popover, Position, Menu} from "evergreen-ui";
import Container from "./Container";

const NavBar = () => (
  <Pane backgroundColor="rgb(15, 1, 94)" height="70px" width="100%">
    <Container height="100%">
      <Pane
        alignItems="center"
        display="flex"
        height="100%"
        justifyContent="space-between"
      >
        <Heading color="white" fontSize="30px">
          Stoodi
        </Heading>
        <Popover
          content={
            <Menu>
              <Menu.Group>
                <Menu.Item>Perfil</Menu.Item>
                <Menu.Item>Move...</Menu.Item>
              </Menu.Group>
            </Menu>
          }
          position={Position.BOTTOM_RIGHT}
        >
          <Avatar
            name=""
            size={30}
            src="https://pbs.twimg.com/profile_images/756196362576723968/6GUgJG4L_400x400.jpg"
          />
        </Popover>
      </Pane>
    </Container>
  </Pane>
);

export default NavBar;
