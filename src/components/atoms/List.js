import styled from 'styled-components';

const List = styled.li`
  color: ${(props) => props.active && props.theme.colors.main};
`;

export default List;
