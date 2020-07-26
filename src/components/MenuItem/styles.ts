import styled from 'styled-components';
import { Home } from 'styled-icons/material-rounded'

import { Props } from '.';

export const Container = styled.div<Props>`
  height: 50px;
  width: 100%;

  margin: 0 0 0 70px;

  cursor: pointer;

  span, svg {
    color: ${props => props.active ? 'var(--primary)' : 'var(--silver)'};
  }
`;

export const MenuIcon = styled(Home)`
  width: 18px;
  height: 18px;
  margin: 0 12px 0 0;
`;

export const Name = styled.span`

`;
