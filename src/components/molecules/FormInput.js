import React from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import styled from 'styled-components';
import { useState } from 'react';

const FormInput = (props) => {
  const validation = (e) => {
    let regExp;
    switch (e.target.value) {
      case '핸드폰 번호':
        regExp = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
        return regExp.test(e.target.value);
      case '비밀번호':
        // 8 ~ 15자 영문, 숫자 조합
        regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,15}$/;
        return regExp.test(e.target.value);
      case '비밀번호 확인':
        return (
          props.inputValue['비밀번호'] === props.inputValue['비밀번호 확인']
        );
      case '이메일':
        regExp =
          /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        return regExp.test(e.target.value);
      default:
        return true;
    }
  };

  return (
    <FormWrapper>
      {props?.formdata?.map((data) => (
        <React.Fragment key={data.id}>
          <Label>{data.title}</Label>
          <Input
            type={data.type}
            name={data.title}
            placeholder={data.placeholder}
            active={props.invalid}
            onChange={props.handleInput}
            value={props.inputValue?.name}
          />
        </React.Fragment>
      ))}
    </FormWrapper>
  );
};

export default FormInput;

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`;
