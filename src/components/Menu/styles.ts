import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MN;

  padding: 20px 0 0 0;

  display: flex;
  flex-direction: column;
  border-right: 2px solid var(--silverlighter);

  .account {
    color: var(--grafith);
    margin: 0 0 30px 42px;

    font-weight: bold;
  }
`;
