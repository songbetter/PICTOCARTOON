import Button from '../../components/atoms/Button';
import LoginForm from '../../components/organisms/LoginForm';

const LoginTemplate = (props) => {
  return (
    <>
      <LoginForm />
      <Button>로그인</Button>
    </>
  );
};

export default LoginTemplate;
