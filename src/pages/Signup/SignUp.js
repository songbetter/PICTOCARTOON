import SignUpTemplate from './SignUpTemplate';
import { postData } from '../../lib/api/index';
import { Signup_URL } from '../../lib/api/api.config';
import { useState } from 'react';

const SignUp = () => {
  const [inputValue, setInputValue] = useState(INITIALVALUE);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const submit = () => {
    postData(Signup_URL, inputValue);
    setInputValue(INITIALVALUE);
  };

  const invalid = false;

  return (
    <SignUpTemplate
      invalid={invalid}
      handleInput={handleInput}
      inputValue={inputValue}
      submit={submit}
    />
  );
};

export default SignUp;

const INITIALVALUE = {
  '비밀번호 확인': '',
  이메일: '',
  비밀번호: '',
  '핸드폰 번호': '',
};
