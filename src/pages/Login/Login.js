import React, { useCallback, useRef, useState } from 'react';
import { postData } from '../../lib/api';
import { Login_URL } from '../../lib/api/api.config';
import LoginTemplate from './LoginTemplate';

const Login = () => {
  const [inputValue, setInputValue] = useState(INITIALVALUE);
  const inputRef = useRef([]);

  const handleInput = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputValue({
        ...inputValue,
        [name]: value,
      });
    },
    [inputValue],
  );

  const submit = useCallback(() => {
    const error = '비밀번호를 확인해주세요.';
    postData(Login_URL, inputValue, error);
    setInputValue(INITIALVALUE);
  }, [inputValue]);

  return (
    <LoginTemplate
      handleInput={handleInput}
      submit={submit}
      inputValue={inputValue}
      inputRef={inputRef}
    />
  );
};

export default Login;

const INITIALVALUE = {
  email: '',
  password: '',
};
