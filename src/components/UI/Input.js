import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import { Required, Text, tokens } from '.';

const Input = (props) => {
  return (
    <>
      <ReactTooltip place="right" type="error" effect="solid" />

      <InputContainer>
        <Text
          variant="medium14"
          color={props.labelColor || tokens.colors.primaryBlack}
        >
          {props.label && <label htmlFor={props.id}>{props.label}</label>}
          <span data-tip="Kotelezo mezo!">
            <Required required={props.required} />
          </span>
        </Text>
        <InputField {...props} />
      </InputContainer>
    </>
  );
};

const InputContainer = styled.div`
  width: 100%;
`;

const InputField = styled.input`
  width: 100%;
  outline: none;
  border-radius: 2px;
  font-size: 14px;
  color: ${tokens.colors.primaryBlack};
  padding: 8px 12px;
  margin-top: 2px;
  margin-bottom: ${(props) => props.bottom || 0};
  border: ${(props) =>
    props.border
      ? `1px solid ${tokens.colors.primaryLight2}`
      : `1px solid ${tokens.colors.white}`};
  transition: 250ms ease;
  box-shadow: ${(props) =>
    props.shadow ? `0 0 10px 2px ${tokens.colors.primaryDark2}0D` : 'none'};

  &::placeholder {
    color: ${tokens.colors.mediumGrey};
  }
`;

export default Input;
