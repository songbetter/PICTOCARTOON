import { useSelector } from 'react-redux';
import FormInput from '../molecules/FormInput';
import Button from '../../components/atoms/Button';

const SignUpForm = (props) => {
  const inputValue = useSelector((state) => state.validationReducer);
  return (
    <>
      <FormInput
        formdata={SIGNUPDATA}
        inputValue={inputValue}
        handleInput={props.handleInput}
        inputRef={props.inputRef}
      />
      <Button main onClick={props.submit}>
        가입하기
      </Button>
    </>
  );
};

export default SignUpForm;

const SIGNUPDATA = [
  {
    id: 1,
    type: 'email',
    title: '이메일',
    name: 'email',
    placeholder: '이메일을 입력해주세요.',
  },
  {
    id: 2,
    type: 'password',
    title: '비밀번호',
    name: 'password',
    placeholder: '비밀번호를 입력해주세요',
  },
  {
    id: 3,
    type: 'password',
    title: '비밀번호 확인',
    name: 'password2',
    placeholder: '비밀번호를 다시한번 입력해주세요',
  },
  {
    id: 4,
    type: 'text',
    title: '핸드폰 번호',
    name: 'phoneNumber',
    placeholder: '-를 제외한 숫자를 입력해주세요',
  },
];
