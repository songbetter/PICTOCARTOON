import styled from 'styled-components';

const Logo = () => {
  return <LogoWrapper>PICTOCARTOON</LogoWrapper>;
};

export default Logo;

const LogoWrapper = styled.div`
  color: ${({ theme }) => theme.colors.main};
  font-weight: bold;
`;
