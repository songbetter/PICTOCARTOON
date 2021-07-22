import Button from '../../components/atoms/Button';
import LoginForm from '../../components/organisms/LoginForm';
import Logo from '../../components/atoms/Logo';
import styled from 'styled-components';
import FlexColCenter from '../../components/atoms/FlexColCenter';

const LoginTemplate = (props) => {
  return (
    <LoginWrapper>
      <Logo />
      <LoginForm
        handleInput={props.handleInput}
        inputValue={props.inputValue}
        inputRef={props.inputRef}
      />
      <Button main onClick={props.submit}>
        로그인
      </Button>
    </LoginWrapper>
  );
};

export default LoginTemplate;

const LoginWrapper = styled(FlexColCenter)`
  padding: 1rem;
  margin-top: 7rem;
`;
