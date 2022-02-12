import React from 'react';
import styled from 'styled-components';
import { Text, tokens } from '.';

const Textarea = (props) => {
  return (
    <TextfieldWrapper>
      <Text
        variant="medium14"
        color={props.labelColor || tokens.colors.primaryBlack}
      >
        {props.label && <label htmlFor={props.id}>{props.label}</label>}
      </Text>
      <Textfield {...props} />
    </TextfieldWrapper>
  );
};

const TextfieldWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2px;
`;

const Textfield = styled.textarea`
  outline: none;
  width: 100%;
  border: 1px solid ${tokens.colors.primaryLight2};
  border-radius: 2px;
  box-shadow: ${(props) =>
    props.shadow ? `0 0 10px 2px ${tokens.colors.primaryDark2}0D` : 'none'};
  font-size: 14px;
  padding: 5px 10px;
  margin-bottom: ${(props) => props.bottom || 0};

  &::placeholder {
    color: ${tokens.colors.mediumGrey};
  }
`;

export default Textarea;