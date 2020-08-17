import styled from 'styled-components';

export const Container = styled.div`
  grid-area: LG;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 2px solid var(--silverlighter);

  background-color: var(--tertiary);
  padding: 11px 0;


  img {
    width: auto;
    
    margin-bottom: 8px;
  }
`;

export const Title = styled.div`
  font-family: 'Rubik';
  font-weight: 500;
  font-size: 20px;
  color: var(--grafith)
`;
