import React from 'react';

import { Grid } from './styles';
import Logo from '../Logo';
import Profile from '../Profile';
import Menu from '../Menu';
import SwitchMode from '../SwitchMode';
import Logaout from '../Logaout';

const Layout: React.FC = () => {

  const handleLogout = () => {
    console.log('Proceed with the logout function');
  }

  return (
    <Grid>
      <Logo />
      <Profile profile={{name: 'Marcia Costa'}} />
      <Menu />
      <SwitchMode />
      <Logaout onLogout={handleLogout}/>

    </Grid>
  )
}

export default Layout;