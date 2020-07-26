import React from 'react';

import { Grid } from './styles';
import Logo from '../Logo';
import Profile from '../Profile';
import Menu from '../Menu';

const Layout: React.FC = () => {
  return (
    <Grid>
      <Logo />
      <Profile profile={{name: 'Marcia Costa'}} />
      <Menu />
      {/* <SwitchMode />
      <Logout /> */}

    </Grid>
  )
}

export default Layout;