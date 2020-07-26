import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 200px auto 400px;
  grid-template-rows: 150px 80px auto 200px 100px;

  grid-template-areas:
    'LG TI SR'
    'PR PG AU'
    'MN PG AU'
    'SW PG AU'
    'LO PG AU';

  height: 100vh;
`;


