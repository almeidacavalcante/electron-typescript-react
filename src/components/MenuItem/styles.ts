import styled from 'styled-components';
import { Home } from 'styled-icons/material-rounded'

import { Props } from '.';

export const Container = styled.div<Props>`
  display: flex;
  height: 40px;
  width: 150px;

  span, svg {
    color: ${props => props.active ? 'var(--primary)' : 'var(--silver)'};
  }
`;

export const MenuIcon = styled(Home
)`
  width: 18px;
  height: 18px;
  margin: 0 10px 0 0;
`;

export const Name = styled.span`

`;
