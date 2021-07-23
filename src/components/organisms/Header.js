import React, { useState } from 'react';
import styled from 'styled-components';
import { getToken } from '../../lib/auth';
import FlexRowBetween from '../atoms/FlexRowBetween';
import Logo from '../atoms/Logo';
import MenuBtn from '../atoms/MenuBtn';
import Nav from '../molecules/Nav';
import NavModal from './NavModal';

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

const NAVLIST_MEMBER = [
  { id: 1, title: '서비스', link: '/' },
  {
    id: 2,
    title: '마이페이지',
    link: '/mypage/order',
  },
  {
    id: 3,
    title: '로그아웃',
    link: '/logout',
  },
];

const NAVLIST = [
  { id: 1, title: '서비스', link: '/' },
  {
    id: 2,
    title: '회원가입',
    link: '/sign-up',
  },
  {
    id: 3,
    title: '로그인',
    link: '/login',
  },
];
