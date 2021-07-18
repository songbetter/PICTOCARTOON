import React from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

const FormInput = (props) => {
  return props?.formdata?.map((data) => (
    <React.Fragment key={data.id}>
      <Label>{data.title}</Label>
      <Input type={data.type} placeholder={data.placeholder} />
    </React.Fragment>
  ));
};

export default FormInput;
