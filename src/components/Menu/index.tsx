import React from "react";

import ProfileImage from "../../assets/profile.jpg";

import { Container } from "./styles";
import MenuItem from "../MenuItem";

const Menu: React.FC = () => {
  return (
    <Container>
      <MenuItem name='Home' />
      <MenuItem active name='My Profile' />
      <MenuItem name='Messages' />
      <MenuItem name='Contact' />
      <MenuItem name='Info' />
    </Container>
  );
};

export default Menu;
