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

const SignUp = () => {
  const inputValue = useSelector((state) => state.validationReducer);
  const dispatch = useDispatch();

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
    if (
      inputValue.email.validation &&
      inputValue.password.validation &&
      inputValue.password2.validation
    ) {
      postData(Signup_URL, inputValue);
      alert('회원가입이 완료되었습니다.');
    } else if (!inputValue.email.validation) {
      alert('올바른 형식의 주소를 입력해주세요');
    } else if (!inputValue.password.validation) {
      alert('8~15자, 영문, 숫자 조합의 비밀번호를 입력해주세요');
    } else if (!inputValue.password2.validation) {
      alert('비밀번호가 일치하지 않습니다');
    }
  };

  const validation = (e) => {
    return inputValue[e.target.name].validation;
  };

  return (
    <SignUpTemplate
      validation={validation}
      handleInput={handleInput}
      submit={submit}
    />
  );
};

export default SignUp;
