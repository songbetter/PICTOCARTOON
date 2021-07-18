import SignUpTemplate from './SignUpTemplate';
import { postData } from '../../lib/api/index';
import { Signup_URL } from '../../lib/api/api.config';

const SignUp = () => {
  const body = {};
  postData(Signup_URL, body);

  return <SignUpTemplate />;
};

export default SignUp;
