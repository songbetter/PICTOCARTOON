import styled from 'styled-components';
import Logo from '../../components/atoms/Logo';
import FlexColCenter from '../../components/atoms/FlexColCenter';
import SignUpForm from '../../components/organisms/SignUpForm';

const SignUpTemplate = (props) => {
  return (
    <SignUpWrapper>
      <Logo />
      <SignUpForm
        handleInput={props.handleInput}
        inputRef={props.inputRef}
        submit={props.submit}
      />
    </SignUpWrapper>
  );
};

export default SignUpTemplate;

const SignUpWrapper = styled(FlexColCenter)`
  padding: 1rem;
  margin-top: 7rem;
`;
