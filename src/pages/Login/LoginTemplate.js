import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../components/atoms/Logo';
import FlexColCenter from '../../components/atoms/FlexColCenter';
import Title from '../../components/atoms/Title';
import LoginForm from '../../components/organisms/LoginForm';
import { SIGNUP_URL } from '../../lib/api/api.config';

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
        <Link to={SIGNUP_URL}>
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
