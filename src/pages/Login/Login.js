import { useState } from 'react';
import { postData } from '../../lib/api';
import { Login_URL } from '../../lib/api/api.config';
import LoginTemplate from './LoginTemplate';

const Login = () => {
  const [inputValue, setInputValue] = useState(INITIALVALUE);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const submit = () => {
    const error = '비밀번호를 확인해주세요.';
    postData(Login_URL, inputValue, error);
    setInputValue(INITIALVALUE);
  };

  return <LoginTemplate handleInput={handleInput} submit={submit} />;
};

export default Login;

const INITIALVALUE = {
  email: '',
  password: '',
};
