import React from "react";

import { Container, Switch, Description, Component } from "./styles";
import Switcher from "../Switcher";

const SwitchMode: React.FC = () => {
  return (
    <Container>
      <Component>
        <Switch>
          <span>Switch mode</span>
          <Switcher />
        </Switch>

        <Description>Switch your board to dark mode and try new tools</Description>
      </Component>
    </Container>
  );
};

export default SwitchMode;
