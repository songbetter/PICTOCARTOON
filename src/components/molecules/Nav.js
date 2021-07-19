import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import List from '../atoms/List';

const Nav = (props) => {
  const history = useHistory();
  const clikedMenu = history.location.pathname;

  return (
    <NavWrapper>
      {props?.navlist?.map((list) => (
        <List key={list.id} active={clikedMenu === list.link}>
          <Link to={list.link}>{list.title}</Link>
        </List>
      ))}
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.ul`
  display: flex;
  font-size: 0.875rem;
  list-style: none;
  li {
    padding-left: 1.25rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    place-items: center;
    margin-top: 2.375rem;
    font-size: 1.125rem;
    line-height: 2rem;
    letter-spacing: 0.013rem;
    li {
      padding-left: 0;
    }
  }
`;
