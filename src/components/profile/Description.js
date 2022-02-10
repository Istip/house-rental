import React from 'react';
import { Center, Text, tokens } from '../UI';
import { DescriptionWrapper } from './styles';

const Description = ({ house }) => {
  return (
    <>
      <Center style={{ marginBottom: '10px' }}>
        <Text variant="h2" tag="h1" color={tokens.colors.primaryDark2}>
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
      <div style={{ padding: '20px', lineHeight: '160%' }}>
        <Text variant="regular14" color={tokens.colors.darkGrey}>
          {house.description}
        </Text>
      </div>

      <Center>
        <img
          src="https://www.google.com/maps/d/thumbnail?mid=1GjkX260B59mJ45WveZEV0tepBz8&hl=en"
          alt={house.name}
          style={{ width: '100%', height: 'auto', margin: '20px' }}
        />
      </Center>
    </>
  );
};

export default Description;
