import SignUpTemplate from './SignUpTemplate';
import { postData } from '../../lib/api/index';
import { Signup_URL } from '../../lib/api/api.config';
import { useDispatch, useSelector } from 'react-redux';
import {
  INITIAL_STATE,
  validationEmail,
  validationPassword,
  validationPassword2,
  validationPhoneNumber,
} from '../../modules/validation';
import { useRef } from 'react';

const SignUp = () => {
  const inputValue = useSelector((state) => state.validationReducer);
  const dispatch = useDispatch();
  const inputRef = useRef([]);

  const handleInput = (e) => {
    switch (e.target.name) {
      case 'email':
        dispatch(validationEmail(e.target.value));
        break;
      case 'password':
        dispatch(validationPassword(e.target.value));
        break;
      case 'password2':
        dispatch(validationPassword2(e.target.value));
        break;
      case 'phoneNumber':
        dispatch(validationPhoneNumber(e.target.value));
        break;
      default:
        return INITIAL_STATE;
    }
  };

  const submit = () => {
    if (!inputValue.email.value || !inputValue.email.validation) {
      alert('올바른 형식의 이메일 주소를 입력해주세요');
      inputRef.current[0].focus();
    } else if (!inputValue.password.value || !inputValue.password.validation) {
      alert('8~15자, 영문, 숫자 조합의 비밀번호를 입력해주세요');
      inputRef.current[1].focus();
    } else if (
      !inputValue.password2.value ||
      !inputValue.password2.validation
    ) {
      alert('비밀번호가 일치하지 않습니다');
      inputRef.current[2].focus();
    } else if (!inputValue.phoneNumber.value) {
      alert('핸드폰 번호를 입력해주세요.');
      inputRef.current[3].focus();
    } else {
      postData(Signup_URL, inputValue);
      alert('회원가입이 완료되었습니다');
    }
  };

  return (
    <SignUpTemplate
      inputValue={inputValue}
      handleInput={handleInput}
      submit={submit}
      inputRef={inputRef}
    />
  );
};

export default SignUp;
