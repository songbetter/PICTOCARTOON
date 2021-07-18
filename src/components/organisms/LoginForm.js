import FormInput from '../molecules/FormInput';

const LoginForm = () => {
  return <FormInput formdata={LOGINDATA} />;
};

export default LoginForm;

const LOGINDATA = [
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
];
