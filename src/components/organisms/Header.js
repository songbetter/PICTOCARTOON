import React, { useState } from 'react';
import styled from 'styled-components';
import NavModal from './NavModal';
import FlexRowBetween from '../atoms/FlexRowBetween';
import Logo from '../atoms/Logo';
import MenuBtn from '../atoms/MenuBtn';
import Nav from '../molecules/Nav';
import { getToken } from '../../lib/auth';
import {
  LOGIN_URL,
  LOGOUT_URL,
  MYPAGE_URL,
  SERVICE_URL,
  SIGNUP_URL,
} from '../../lib/api/api.config';

const NAVLIST_MEMBER = [
  { id: 1, title: '서비스', link: SERVICE_URL },
  {
    id: 2,
    title: '마이페이지',
    link: MYPAGE_URL,
  },
  {
    id: 3,
    title: '로그아웃',
    link: LOGOUT_URL,
  },
];

const NAVLIST = [
  { id: 1, title: '서비스', link: SERVICE_URL },
  {
    id: 2,
    title: '회원가입',
    link: SIGNUP_URL,
  },
  {
    id: 3,
    title: '로그인',
    link: LOGIN_URL,
  },
];

const Header = () => {
  const isLogin = !!getToken().token;
  const [viewIsOn, setViewIsOn] = useState(false);

  return viewIsOn ? (
    <NavModal
      navlist={isLogin ? NAVLIST_MEMBER : NAVLIST}
      viewIsClose={() => setViewIsOn(!viewIsOn)}
    />
  ) : (
    <HeaderWrapper>
      <Logo />
      <MenuBtn viewIsOn={() => setViewIsOn(!viewIsOn)} />
      <VisiableNav>
        <Nav navlist={isLogin ? NAVLIST_MEMBER : NAVLIST} />
      </VisiableNav>
    </HeaderWrapper>
  );
};

export default React.memo(Header);

const HeaderWrapper = styled(FlexRowBetween)`
  padding: 0px 15px;
  height: 58px;
`;

const VisiableNav = styled.div`
  display: flex;
  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;
