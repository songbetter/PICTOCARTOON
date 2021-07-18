import FormInput from '../molecules/FormInput';

const SignUpForm = () => {
  return <FormInput formdata={SIGNUPDATA} />;
};

export default SignUpForm;

const SIGNUPDATA = [
  {
    id: 1,
    type: 'text',
    title: '이메일',
    placeholder: '이메일을 입력해주세요.',
  },
  {
    id: 2,
    type: 'password',
    title: '비밀번호',
    placeholder: '비밀번호를 입력해주세요',
  },
  {
    id: 3,
    type: 'password',
    title: '비밀번호 확인',
    placeholder: '비밀번호를 다시한번 입력해주세요',
  },
  {
    id: 4,
    type: 'text',
    title: '핸드폰 번호',
    placeholder: '-를 제외한 숫자를 입력해주세요',
  },
];
