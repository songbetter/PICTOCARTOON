import { AiOutlineMenu } from 'react-icons/ai';
import styled from 'styled-components';

const MenuBtn = (props) => {
  return (
    <VisiableMenu onClick={props.viewIsOn}>
      <AiOutlineMenu />
    </VisiableMenu>
  );
};

export default MenuBtn;

const VisiableMenu = styled.div`
  display: none;
  @media ${({ theme }) => theme.device.mobile} {
    display: flex;
  }
  cursor: pointer;
`;
