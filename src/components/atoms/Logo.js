import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logo = () => {
  return (
    <LogoWrapper>
      <Link to="/">PICTOCARTOON</Link>
    </LogoWrapper>
  );
};

export default React.memo(Logo);

const LogoWrapper = styled.div`
  color: ${({ theme }) => theme.colors.main};
  font-weight: bold;
`;
