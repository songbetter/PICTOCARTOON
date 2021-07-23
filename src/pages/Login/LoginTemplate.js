import LoginForm from '../../components/organisms/LoginForm';
import Logo from '../../components/atoms/Logo';
import styled from 'styled-components';
import FlexColCenter from '../../components/atoms/FlexColCenter';
import { Link } from 'react-router-dom';
import Title from '../../components/atoms/Title';

const LoginTemplate = (props) => {
  return (
    <LoginWrapper>
      <Logo />
      <LoginForm
        handleInput={props.handleInput}
        inputValue={props.inputValue}
        inputRef={props.inputRef}
        submit={props.submit}
      />
      <p>
        회원이 아니신가요?{' '}
        <Link to="/sign-up">
          <Title>회원가입</Title>
        </Link>
      </p>
    </LoginWrapper>
  );
};

export default LoginTemplate;

const LoginWrapper = styled(FlexColCenter)`
  padding: 1rem;
  margin-top: 7rem;
`;
