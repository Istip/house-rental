import React from 'react';
import { Information } from '.';
import { Center, Text, tokens } from '../UI';
import { DescriptionWrapper } from './styles';

const Description = ({ house }) => {
  return (
    <>
      <Center style={{ marginBottom: '10px' }}>
        <Text variant="h2" tag="h1" color={tokens.colors.primary}>
          {house.name}
        </Text>
      </Center>

      <DescriptionWrapper>
        <Center>
          <Text variant="medium14" color={tokens.colors.primaryDark1}>
            {house.place}
          </Text>
        </Center>

        <Center>
          <Text variant="regular14" color={tokens.colors.primaryDark1}>
            {house.address}
          </Text>
        </Center>
      </DescriptionWrapper>

      <Information house={house} />

      <div style={{ padding: '20px', lineHeight: '160%' }}>
        <Text variant="regular14" color={tokens.colors.darkGrey}>
          {house.description}
        </Text>
      </div>
    </>
  );
};

export default Description;
