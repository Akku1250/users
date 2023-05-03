import styled from 'styled-components';

interface IProps {
  isPasswordInput?: boolean;
}

const Input = styled.input<IProps>`
  margin-top: 4px;
  margin-bottom: ${(props) => (props.isPasswordInput ? '20px' : '8px')};
`;

export default Input;
