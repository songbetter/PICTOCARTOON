import { useState } from 'react';
import styled from 'styled-components';
import { getToken } from '../../lib/auth';
import FlexRowBetween from '../atoms/FlexRowBetween';
import Logo from '../atoms/Logo';
import MenuBtn from '../atoms/MenuBtn';
import Nav from '../molecules/Nav';
import NavModal from './NavModal';

const Header = () => {
  const isLogin = !!getToken().token;
  const NAVLIST = [
    { id: 1, title: '서비스', link: '/' },
    {
      id: 2,
      title: isLogin ? '마이페이지' : '회원가입',
      link: isLogin ? '/mypage/order' : '/sign-up',
    },
    {
      id: 3,
      title: isLogin ? '로그아웃' : '로그인',
      link: isLogin ? '/logout' : '/login',
    },
  ];
  const [viewIsOn, setViewIsOn] = useState(false);

  return viewIsOn ? (
    <NavModal navlist={NAVLIST} viewIsClose={() => setViewIsOn(!viewIsOn)} />
  ) : (
    <HeaderWrapper>
      <Logo />
      <MenuBtn viewIsOn={() => setViewIsOn(!viewIsOn)} />
      <VisiableNav>
        <Nav navlist={NAVLIST} />
      </VisiableNav>
    </HeaderWrapper>
  );
};

export default Header;

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
