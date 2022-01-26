import React from 'react';
import styled from 'styled-components';
import { Text, tokens } from '.';

const Input = (props) => {
  return (
    <InputContainer>
      <Text variant="medium14" color={tokens.colors.primaryBlack}>
        {props.label && <label htmlFor={props.id}>{props.label}</label>}
      </Text>
      <InputField {...props} />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 100%;
`;

const InputField = styled.input`
  width: 100%;
  outline: none;
  border: none;
  border-radius: 2px;
  font-size: 14px;
  color: ${tokens.colors.primaryBlack};
  padding: 8px 12px;
  margin-top: 2px;
  margin-bottom: ${(props) => props.bottom || 0};

  &::placeholder {
    color: ${tokens.colors.mediumGrey};
  }
`;

export default Input;
