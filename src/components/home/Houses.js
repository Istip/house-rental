import React from 'react';
import { Center, Text, tokens } from '../UI';
import { HousesWrapper } from './styles';

const Houses = (props) => {
  return (
    <HousesWrapper>
      <Center>
        <Text variant="h1" color={tokens.colors.primaryBlack}>
          Talalatok
        </Text>
      </Center>

      {props.children}
    </HousesWrapper>
  );
};

export default Houses;
