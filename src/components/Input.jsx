import React from "react";
import { Field as FieldFormik, ErrorMessage } from "formik";
import styled from "styled-components";

const FieldStyled = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid;
  outline: none;
  font-size: 16px;
`;

const ErrorStyled = styled.span`
  color: red;
  font-size: 14px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 15px;
  width: 240px;
`;

const Label = styled.label`
  text-transform: capitalize;
`;

const RequiredLabel = styled.span`
  color: red;
`;

export const Input = ({ name, type = "", label, required, ...props }) => {
  return (
    <Container>
      <Label>
        {label || name}
        {required && <RequiredLabel>*</RequiredLabel>}
      </Label>
      <FieldFormik as={FieldStyled} name={name} type={type} {...props} />
      <ErrorMessage name={name} component={ErrorStyled} />
    </Container>
  );
};
