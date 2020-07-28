import styled from 'styled-components';

export const Container = styled.div`
  grid-area: PR;

  display: flex;
  align-items: center;

  padding: 0 0 0 40px;
  border-right: 2px solid var(--silverlighter);

  & > div > span {
    color: var(--silver); 
    font-size: 12px;
  }
`;

export const Name = styled.div`
  font-weight: bold;
  color: var(--grafith);
  font-size: 13px;
  margin: 5px 0 0 0;
`;

const imageSize = 40;

export const Circular = styled.div`
  width: ${imageSize}px;
  height: ${imageSize}px;
  border-radius: 50%;
  margin: 0 15px 0 0;

  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  overflow: hidden;

  img {
    height: ${imageSize}px;
  }
`;

