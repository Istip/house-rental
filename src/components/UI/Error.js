import React from 'react';
import styled from 'styled-components';
import { Text, tokens } from '.';

const Error = (props) => {
  if (!props.children) {
    return null;
  }

  return (
    <ErrorContainer {...props}>
      <Text
        variant="regular12"
        color={tokens.colors.primaryWhite}
        lineHeight="150%"
      >
        {props.children}
      </Text>
    </ErrorContainer>
  );
};

const ErrorContainer = styled.div`
  text-align: center;
  padding: 20px;
  margin: 20px;
  border-radius: 2px;
  background: ${tokens.colors.error}99;
  border: 1px solid ${tokens.colors.error};
`;

export default Error;
