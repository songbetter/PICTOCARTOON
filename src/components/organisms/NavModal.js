import styled from 'styled-components';
import Modal from '../atoms/Modal';
import Nav from '../molecules/Nav';

const NavModal = (props) => {
  return (
    <Modal>
      <NavModalWrapper>
        <CloseBtn>✖</CloseBtn>
        <Nav navlist={props.navlist} />
      </NavModalWrapper>
    </Modal>
  );
};

export default NavModal;

const CloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 20px;
  cursor: pointer;
  font-size: 2.5rem;
  width: 100%;
`;

const NavModalWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
