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
        inputValue={props.inputValue}
        handleInput={props.handleInput}
        inputRef={props.inputRef}
      />
      <Button main onClick={props.submit}>
        가입하기
      </Button>
    </SignUpWrapper>
  );
};

export default SignUpTemplate;

const SignUpWrapper = styled(FlexColCenter)`
  padding: 1rem;
  margin-top: 7rem;
`;
