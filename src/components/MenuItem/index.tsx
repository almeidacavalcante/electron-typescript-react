import React from "react";

import { Container, MenuIcon, Name } from "./styles";

export interface Props {
  name?: string;
  active?: boolean;
}


const MenuItem: React.FC<Props> = ({name, active}) => {
  return (
    <Container active={active}>
      <MenuIcon />
      <Name>{name}</Name>
    </Container>
  );
};

export default MenuItem;
