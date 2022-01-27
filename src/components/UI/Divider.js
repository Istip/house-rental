import React from 'react';
import styled from 'styled-components';
import { Center, Text, tokens } from '.';

const Divider = (props) => {
  return (
    <DividerWrapper {...props}>
      <Center>
        <Line color={props.color} />
        {props.children && (
          <TextWrapper>
            <Text variant="regular12" color={props.color}>
              {props.children}
            </Text>
          </TextWrapper>
        )}
        <Line color={props.color} />
      </Center>
    </DividerWrapper>
  );
};

const DividerWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: ${(props) => props.padding || '10px 60px'};
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background ${(props) => props.color || `${tokens.colors.mediumGrey}`};
`;

const TextWrapper = styled.div`
  padding: 0 10px;
`;

export default Divider;
