import styled from 'styled-components';

import { Props } from '.';

export const Container = styled.div<Props>`
  height: 18px;
  width: 35px;
  position: relative;

  background: ${props => props.active ? 'var(--primary)' : 'var(--silver)'};
  border-radius: 9px;
  cursor: pointer;
  transition: 0.4s all ease;

  &::after {
    height: 14px;
    width: 14px;
    top: 2px;
    right: ${props => props.active ? '2px' : '19px'};

    background: white;
    border-radius: 50%;

    position: absolute;

    content: ''; 
    transition: 0.4s all ease;
  }
`;
