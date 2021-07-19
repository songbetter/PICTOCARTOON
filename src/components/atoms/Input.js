import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-bottom: ${(props) =>
      props.active ? props.theme.colors.main : props.theme.colors.sub}
    1px solid;
`;

export default Input;
