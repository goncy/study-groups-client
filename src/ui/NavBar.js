import React from "react";
import {
  Pane,
  IconButton,
  Heading,
  Avatar,
  Popover,
  Position,
  Menu,
} from "evergreen-ui";
import Container from "./Container";

const NavBar = ({history}) => (
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
        <Pane alignItems="center" display="flex">
          <Popover
            content={
              <Menu>
                <Menu.Group>
                  <Menu.Item
                    icon="plus"
                    onSelect={() => {
                      history.push("/groups/create");
                    }}
                  >
                    Agregar grupo
                  </Menu.Item>
                  <Menu.Item
                    icon="list"
                    onSelect={() => {
                      history.push("/my-groups");
                    }}
                  >
                    Mis grupos
                  </Menu.Item>
                  <Menu.Item
                    icon="user"
                    onSelect={() => {
                      history.push("/profile");
                    }}
                  >
                    Perfil
                  </Menu.Item>
                </Menu.Group>
                <Menu.Divider />
                <Menu.Group>
                  <Menu.Item
                    icon="cross"
                    intent="danger"
                    onSelect={() => {
                      history.push("/login");
                    }}
                  >
                    Salir
                  </Menu.Item>
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
      </Pane>
    </Container>
  </Pane>
);

export default NavBar;
