import styled from 'styled-components';

interface IProps {
  setFlexDirectionColumn?: boolean;
  setAlignItemCenter?: boolean;
}

const Wrapper = styled.div<IProps>`
  display: flex;
  justify-content: center;
  flex-direction: ${(props) => (props.setFlexDirectionColumn ? 'column' : undefined)};
  align-items: ${(props) => (props.setAlignItemCenter ? 'center' : undefined)};
  height: 650px;
`;

export default Wrapper;
