import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  padding: 1rem;
  width: 100%;
  color: ${(props) => (props.main ? 'white' : props.theme.colors.main)};
  background-color: ${(props) =>
    props.main ? props.theme.colors.main : props.theme.colors.sub};
  cursor: pointer;
`;

export default Button;
