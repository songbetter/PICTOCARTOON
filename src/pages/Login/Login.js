import React, { useCallback, useRef, useState } from 'react';
import { postData } from '../../lib/api';
import { LOGIN_URL } from '../../lib/api/api.config';
import LoginTemplate from './LoginTemplate';

const INITIALVALUE = {
  email: '',
  password: '',
};

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
    postData(LOGIN_URL, inputValue, error);
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
