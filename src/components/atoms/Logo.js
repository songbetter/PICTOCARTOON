import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SERVICE_URL } from '../../lib/api/api.config';

const Logo = () => {
  return (
    <LogoWrapper>
      <Link to={SERVICE_URL}>PICTOCARTOON</Link>
    </LogoWrapper>
  );
};

export default React.memo(Logo);

const LogoWrapper = styled.div`
  color: ${({ theme }) => theme.colors.main};
  font-weight: bold;
`;
