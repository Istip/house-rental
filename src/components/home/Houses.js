import React from 'react';
import { Center, Text, tokens } from '../UI';
import { HousesWrapper } from './styles';

const Houses = (props) => {
  return (
    <>
      <Center style={{ margin: '50px 0 20px' }}>
        <Text variant="h2" color={tokens.colors.primaryDark1}>
          Talalatok
        </Text>
      </Center>
      <HousesWrapper>{props.children}</HousesWrapper>
    </>
  );
};

export default Houses;
