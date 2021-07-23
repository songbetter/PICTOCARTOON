import React, { useState } from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import styled from 'styled-components';

const FormInput = (props) => {
  const [isOnBlur, setIsOnBlur] = useState(false);

  return (
    <FormWrapper>
      {props.formdata.map((data) => (
        <React.Fragment key={data.id}>
          <Label>{data.title}</Label>
          <Input
            type={data.type}
            name={data.name}
            placeholder={data.placeholder}
            active={
              isOnBlur && data.id === 1
                ? !props.inputValue.email.validation
                : (data.id === 2) & !props.inputValue.password.validation
            }
            onChange={props.handleInput}
            ref={(ref) => props.inputRef.current.push(ref)}
            onBlur={() => data.id === 1 && setIsOnBlur(!isOnBlur)}
          />
        </React.Fragment>
      ))}
    </FormWrapper>
  );
};

export default FormInput;

const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`;
