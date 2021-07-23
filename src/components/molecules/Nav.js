import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import List from '../atoms/List';
import { LOGOUT_URL, SERVICE_URL } from '../../lib/api/api.config';
import { destroyToken } from '../../lib/auth';

const Nav = (props) => {
  const history = useHistory();
  const clikedMenu = history.location.pathname;

  const onClickList = (e) => {
    if (e.target.dataset.idx === LOGOUT_URL) {
      destroyToken();
      alert('로그아웃이 완료되었습니다.');
      document.location.href = SERVICE_URL;
    } else {
      history.push(e.target.dataset.idx);
    }
  };

  return (
    <NavWrapper>
      {props.navlist.map((list) => (
        <List
          key={list.id}
          data-idx={list.link}
          active={clikedMenu === list.link}
          onClick={onClickList}
        >
          {list.title}
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
