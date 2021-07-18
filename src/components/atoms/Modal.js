import styled from 'styled-components';
import FlexColCenter from './FlexColCenter';

const Modal = styled(FlexColCenter)`
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: lightskyblue;
`;

export default Modal;
