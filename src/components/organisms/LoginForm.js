import FormInput from '../molecules/FormInput';
import Button from '../../components/atoms/Button';

const LOGINDATA = [
  {
    id: 5,
    type: 'email',
    title: '이메일',
    name: 'email',
    placeholder: '이메일을 입력해주세요.',
  },

  {
    id: 6,
    type: 'password',
    title: '비밀번호',
    name: 'password',
    placeholder: '비밀번호를 입력해주세요',
  },
];

const LoginForm = (props) => {
  return (
    <>
      <FormInput
        formdata={LOGINDATA}
        handleInput={props.handleInput}
        inputValue={props.inputValue}
        inputRef={props.inputRef}
      />
      <Button main onClick={props.submit}>
        로그인
      </Button>
    </>
  );
};

export default LoginForm;
