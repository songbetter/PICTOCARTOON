import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  padding: 1rem;
  width: 100%;
  color: white;
  background-color: ${({ theme }) => theme.colors.main};
  cursor: pointer;
`;

export default Button;
