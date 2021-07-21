import React from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import styled from 'styled-components';

const FormInput = (props) => {
  return (
    <FormWrapper>
      {props?.formdata?.map((data) => (
        <React.Fragment key={data.id}>
          <Label>{data.title}</Label>
          <Input
            type={data.type}
            name={data.name}
            placeholder={data.placeholder}
            active={props.validation}
            onChange={props.handleInput}
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
