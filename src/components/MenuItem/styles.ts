import styled from 'styled-components';
import { Home } from 'styled-icons/material-rounded'

import { Props } from '.';

export const Container = styled.div<Props>`
  height: 50px;
  width: 100%;

  margin: 0 0 0 40px;

  cursor: pointer;

  span, svg {
    transition: 0.3s color ease;
    color: ${props => props.active ? 'var(--primary)' : 'var(--silver)'};
  }
  
  &:hover {
    span, svg {
      color: var(--grafith);
      transition: 0.3s color ease;
    }
  }
`;

export const MenuIcon = styled(Home)`
  width: 18px;
  height: 18px;
  margin: 0 12px 0 0;
`;

export const Name = styled.span`

`;
