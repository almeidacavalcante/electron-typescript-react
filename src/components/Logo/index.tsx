import React from "react";

import LogoImage from "../../assets/logo.png";

import { Container, Title } from "./styles";

const Logo: React.FC = () => {
  return (
    <Container>
      <img src={LogoImage} alt="Clone Swi" />
      <Title>Swi Clone</Title>
    </Container>
  );
};

export default Logo;
