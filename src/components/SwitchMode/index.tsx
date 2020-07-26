import React from "react";

import { Container, Switch, Description } from "./styles";
import Switcher from "../Switcher";

const SwitchMode: React.FC = () => {
  return (
    <Container>
      <Switch>
        <span>Switch mode</span>
        <Switcher />
      </Switch>

      <Description>Switch your board to dark mode and try new tools</Description>
    </Container>
  );
};

export default SwitchMode;
