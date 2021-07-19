import Button from '../../components/atoms/Button';
import Logo from '../../components/atoms/Logo';
import styled from 'styled-components';
import SignUpForm from '../../components/organisms/SignUpForm';
import FlexColCenter from '../../components/atoms/FlexColCenter';

const SignUpTemplate = (props) => {
  return (
    <SignUpWrapper>
      <Logo />
      <SignUpForm
        invalid={props.invalid}
        inputValue={props.inputValue}
        handleInput={props.handleInput}
      />
      <Button onClick={props.submit}>가입하기</Button>
    </SignUpWrapper>
  );
};

export default SignUpTemplate;

const SignUpWrapper = styled(FlexColCenter)`
  padding: 1rem;
  margin-top: 7rem;
`;
