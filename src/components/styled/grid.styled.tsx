import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 100px);
  margin-top: 50px;
  grid-row-gap: 20px;
  grid-column-gap: 100px;
`;

export default Grid;
