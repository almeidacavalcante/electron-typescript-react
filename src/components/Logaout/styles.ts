import styled from 'styled-components';
import { LogOut } from 'styled-icons/ionicons-outline';


export const Container = styled.div`
  grid-area: LO;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-right: 2px solid var(--silverlighter);
  padding: 0 40px;
  
  cursor: pointer;
  color: var(--silver);

  transition: 0.3s color ease;

  &:hover {
    color: var(--grafith);
  }
`;

export const LogoutIcon = styled(LogOut)`
  width: 25px;
`;
