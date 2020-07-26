import React, { useState } from "react";

import { Container } from "./styles";

export interface Props {
  active?: boolean;
}

const Switcher: React.FC<Props> = () => {

  const [isActive, setIsActive] = useState(false);

  return (
    <Container active={isActive} onClick={() => setIsActive(!isActive)}>

    </Container>
  );
};

export default Switcher;
