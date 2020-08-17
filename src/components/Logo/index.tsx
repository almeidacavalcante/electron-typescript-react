import React from "react";

import LogoImage from "../../assets/swi.svg";

import { Container, Title } from "./styles";

const Logo: React.FC = () => {
  return (
    <Container>
      <Title>Swi</Title>
      <img src={LogoImage} alt="Clone Swi" />
    </Container>
  );
};

export default Logo;
