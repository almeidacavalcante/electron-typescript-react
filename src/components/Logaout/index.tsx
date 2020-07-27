import React from "react";

import { Container, LogoutIcon } from "./styles";

interface Props {
  onLogout: Function;
}

const Logaout: React.FC<Props> = ({onLogout}) => {
  

  
  return (
    <Container
      onClick={() => onLogout()}
    >
      <span>Logout</span>
      <LogoutIcon></LogoutIcon>
    </Container>
  );
};

export default Logaout;
